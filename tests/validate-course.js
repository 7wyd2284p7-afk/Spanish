const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(path.join(root, 'data'))
  .filter((name) => /^course-[a-z0-9-]+\.js$/i.test(name))
  .sort();

if (!files.length) throw new Error('没有找到 data/course-*.js 课程数据文件。');

const requiredLessonFields = ['id', 'title', 'minutes', 'canDo', 'words', 'grammar', 'sentence', 'order', 'dialogue'];
const ids = new Set();
let lessonCount = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const file of files) {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'data', file), 'utf8'), sandbox, { filename: file });
  const course = sandbox.window.COURSE;
  assert(course && Array.isArray(course.units), `${file}: 缺少 window.COURSE.units。`);
  assert(course.units.length >= 10, `${file}: A1 至少应覆盖 10 个主题单元。`);

  course.units.forEach((unit, unitIndex) => {
    assert(unit.id && unit.title && Array.isArray(unit.lessons), `${file}: 第 ${unitIndex + 1} 单元结构不完整。`);
    assert(unit.lessons.length >= 5, `${file}/${unit.id}: 精学单元至少需要 5 节课。`);
    assert(unit.lessons.some(lesson => lesson.checkpoint), `${file}/${unit.id}: 缺少复习或综合关卡。`);
    unit.lessons.forEach((lesson) => {
      lessonCount += 1;
      requiredLessonFields.forEach((field) => assert(lesson[field] != null, `${file}/${lesson.id || '未知课程'}: 缺少 ${field}。`));
      assert(!ids.has(lesson.id), `${file}: 课程 ID ${lesson.id} 重复。`);
      ids.add(lesson.id);
      assert(lesson.words.length >= 4 && lesson.words.length <= 6, `${lesson.id}: 核心词块应为 4–6 个。`);
      lesson.words.forEach((word, index) => assert(word.es && word.zh && word.tip, `${lesson.id}: 第 ${index + 1} 个词块缺少 es、zh 或 tip。`));
      assert(Array.isArray(lesson.grammar.examples) && lesson.grammar.examples.length > 0, `${lesson.id}: 语法示例不能为空。`);
      assert(Array.isArray(lesson.order.tokens) && lesson.order.tokens.join(' ') === lesson.order.answer, `${lesson.id}: order.tokens 无法组成 order.answer。`);
      assert(Array.isArray(lesson.dialogue.choices), `${lesson.id}: 对话选项必须是数组。`);
      assert(new Set(lesson.dialogue.choices).size === lesson.dialogue.choices.length, `${lesson.id}: 对话选项不能重复。`);
      assert(lesson.dialogue.choices.filter((choice) => choice === lesson.dialogue.answer).length === 1, `${lesson.id}: 对话必须包含且只包含一次正确答案。`);
    });
  });
}

assert(lessonCount >= 50, `A1 精学路线至少需要 50 节课，当前只有 ${lessonCount} 节。`);

console.log(`课程数据检查通过：${files.length} 个文件，${lessonCount} 节课，${ids.size} 个唯一课程 ID。`);
