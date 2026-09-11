# Penny 的西语小站

一个为中文母语初学者设计的西班牙语 A1 精学网站。当前专注 A1：10 个单元、50 节微课，其中包含 11 次单元或综合关卡。A1 没学扎实前不扩展 A2、B1。

## 现在可以做什么

- 沿 A1 路线逐课解锁学习内容。
- 学习约 230 个核心词块、50 个完整示范句和 50 个情境对话。
- 学习词块、关键语法和真实场景表达。
- 使用浏览器西班牙语语音完成听辨练习。
- 通过配对、选择和词块排序练习，不要求键盘拼写。
- 自动保存经验值、连续学习天数、课程成绩和错题。
- 使用“每日练习”从已经完成的课程中随机抽取 10 题复习；题库会随学习进度增长。

## 打开方式

直接打开 `index.html`。主页可进入完整 A1 课程或每日练习，不需要安装软件，也不需要联网。

浏览器需要允许语音播放。学习数据保存在当前浏览器的 `localStorage` 中；清除浏览器网站数据会清空进度。

## 项目结构

```text
index.html                              A1 精学主页
course.html                             可维护的 A1 课程页面
Penny-Spanish-A1-standalone.html        可单独复制、直接打开的生成版
practice.html                           每日 10 题练习
styles/home.css                         主页样式
styles/course.css                       课程页样式
data/course-a1.js                       A1 的全部课程内容
scripts/course-app.js                   课程交互、进度与复习逻辑
scripts/build-standalone.js             从源码生成最新单文件版本
tests/validate-course.js                无依赖课程数据检查
COURSE_SPEC.md                          教学原则、课程路线和内容规范
AGENTS.md                               后续 AI 的项目维护说明
```

## 内容维护

修改或增加 A1 课程时，优先编辑 `data/course-a1.js`，不要把课程正文重新写进 HTML 或运行逻辑。

源码修改完成后运行 `node scripts/build-standalone.js`，同步生成可复制到桌面直接打开的 `Penny-Spanish-A1-standalone.html`。

每节课都必须包含以下内容：

1. 可观察的学习目标 `canDo`。
2. 4–6 个高频词块及中文释义、发音提示。
3. 一条当课立刻能用的语法规律。
4. 听辨、整句理解、词块排序和情境回应。
5. 明确答案与简短反馈。

完整教学约束与 A1 路线见 [COURSE_SPEC.md](COURSE_SPEC.md)。

## 学习进度兼容

A1 完整课程继续使用存储键 `pennySpanishA1V2`；每日练习使用 `pennySpanishProgress`。维护代码时不要随意改名，否则已有学习进度会丢失。

## 发布前检查

先运行课程数据检查：

```text
node tests/validate-course.js
node scripts/build-standalone.js --check
```

- 从 `index.html` 能进入完整课程和每日练习。
- 首页、课程页和练习页在手机宽度下没有横向滚动。
- 新用户可以打开第一课，后续课程按顺序解锁。
- 发音按钮、选项题、词块排序、错题复习和返回首页正常。
- 刷新页面后课程进度仍然存在。
- 浏览器控制台没有 JavaScript 错误。

## 隐私

网站没有账号系统、服务器或分析代码。学习记录仅保存在浏览器本地。
