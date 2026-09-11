const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'course.html');
const outputPath = path.join(root, 'Penny-Spanish-A1-standalone.html');

const source = fs.readFileSync(sourcePath, 'utf8');
const css = fs.readFileSync(path.join(root, 'styles', 'course.css'), 'utf8').trim();
const courseData = fs.readFileSync(path.join(root, 'data', 'course-a1.js'), 'utf8').trim();
const app = fs.readFileSync(path.join(root, 'scripts', 'course-app.js'), 'utf8').trim();

const output = source
  .replace('  <link rel="stylesheet" href="styles/course.css" />', `  <style>\n${css}\n  </style>`)
  .replace('  <script src="data/course-a1.js"></script>', `  <script>\n${courseData}\n  </script>`)
  .replace('  <script src="scripts/course-app.js"></script>', `  <script>\n${app}\n  </script>`)
  .trimEnd() + '\n';

if (process.argv.includes('--check')) {
  const current = fs.readFileSync(outputPath, 'utf8');
  if (current !== output) {
    console.error('standalone 文件不是最新版本，请运行 node scripts/build-standalone.js。');
    process.exit(1);
  }
  console.log('standalone 文件与课程源码一致。');
} else {
  fs.writeFileSync(outputPath, output, 'utf8');
  console.log(`已生成 ${path.basename(outputPath)}。`);
}
