---
name: kaoyan-reading-assistant
description: 考研英语一双语精读与阅读理解生成器。接收英文长文（外刊、真题、新闻），自动提炼考研大纲词汇（带词形变体）、高频短语、长难句语法结构解析及真题风格阅读理解题目，追加至本地归档 src/data/articles.ts 并自动打包生成零依赖可双击打开的单文件 HTML。当用户发送英文文章、PDF 剪贴内容或要求处理考研精读材料时使用。
---

# 考研英语一精读生成器 (Kaoyan Reading Assistant Skill)

本 Skill 旨在指导 AI Agent 将用户提供的英文文章（如 The Economist, Nature, LA Times 或考研真题）精准转换为符合 **考研英语一** 难度与题型标准的结构化数据集，并自动触发本地 HTML 打包流程。

---

## 🎯 核心目标与生成标准

接收到英文文本后，按以下 5 个步骤处理：

### 1. 文本清洗与精准翻译 (Clean & Translate)
* **消除格式干扰**：清除文本中的 `[cite: x]` 脚注、页码、换行错位等杂质。
* **考研级精译**：拒绝机械直译。严谨理解复杂从句、固定搭配与学术语境，输出流畅、地道的中文段落翻译（按 `p1`, `p2`, ... 依次编号）。

### 2. 考研大纲核心词汇与熟词僻义 (Vocabulary & Variants)
* **精选词汇**：提炼 8-15 个考研大纲核心词汇（重点关注学术动词、抽象名词、高频形容词及熟词僻义）。
* **字段完整**：
  * `word`: 词汇原形（如 `analyze`）
  * `variants`: 包含了正文中可能出现的复数、过去式、分词等形式的数组（如 `["analyzes", "analyzed", "analyzing"]`），以保证前端 `<TextHighlighter />` 能准确高亮。
  * `phonetic`: 标准国际音标（如 `/ˈæn.əl.aɪz/`）
  * `partOfSpeech`: 词性（如 `v.`, `n.`, `adj.`）
  * `definition`: 精确英文释义
  * `chinese`: 文本语境下的中文释义
  * `example` & `exampleChinese`: 原文中的真实例句及对应翻译

### 3. 高频短语 (Key Phrases)
* 提炼 3-5 个高频短语/固定搭配（如 `fire on all cylinders`, `hunker down`），附带中文含义与原文例句。

### 4. 长难句解析 (Grammar Notes - 考研重中之重)
* 选出 2-3 组结构复杂（多层从句、分词作状语/定语、倒装、独立主格、插入语等）的典型长难句。
* 编写详细的中文语法拆解，清晰指出主干、从句类型及关键修饰关系。

### 5. 考研真题风格阅读理解 (Comprehension Quiz)
* 编制 3 道单项选择题（包含细节题、推理引申题、主旨大意或作者态度题）。
* **干扰项设计**：参考考研命题陷阱（如偷换概念、正反混淆、过度引申、答非所问）。
* **详尽解析**：针对正确项和错误项给出原文依据与理由。

---

## 📁 目标文件结构 (`src/data/articles.ts`)

生成的 TypeScript 对象必须符合 `ArticleData` 规范，并追加至 `src/data/articles.ts` 中 `allArticles` 数组的最前端（确保最新文章优先展示）：

```typescript
export const articleYYYYMMDD: ArticleData = {
  id: "YYYY-MM-DD",
  date: "YYYY-MM-DD",
  title: "文章英文标题",
  difficulty: "考研英语一 (来源)",
  wordCount: 750,
  topic: "主题分类",
  summary: "一句话中文/英文摘要",
  paragraphs: [
    { id: "p1", english: "...", chinese: "..." }
  ],
  vocabulary: [
    {
      word: "word",
      variants: ["word", "words", "worded"],
      phonetic: "/.../",
      partOfSpeech: "v.",
      definition: "...",
      chinese: "...",
      example: "...",
      exampleChinese: "..."
    }
  ],
  phrases: [
    { phrase: "...", chinese: "...", example: "..." }
  ],
  grammarNotes: [
    { sentence: "...", explanation: "..." }
  ],
  quiz: [
    {
      question: "...",
      options: ["A...", "B...", "C...", "D..."],
      correctAnswer: 1, // 0-indexed
      explanation: "..."
    }
  ]
};

export const allArticles: ArticleData[] = [
  articleYYYYMMDD,
  // 往期文章...
];
```

---

## ⚡ 自动触发单文件 HTML 打包

在修改/追加 `src/data/articles.ts` 后，**必须在终端中运行打包命令**：

```bash
npm run build
```

**命令效果**：
1. 自动调用 `scripts/archive-build.js` 将 React + CSS + 数据 100% 内联打包。
2. 在 `readings/` 目录下生成名为 `YYYY-MM-DD_文章标题.html` 的独立文件。
3. 同步覆盖跟目录入口 `ReadingAssistant.html`。
4. **无需用户手动运行 `npm run dev`，用户双击任意 HTML 文件即可使用。**

---

## ⚠️ 系统规范与防错须知

1. **转义安全**：字符串中的单双引号或特殊字符必须正确转义，避免破坏 TypeScript 语法。
2. **变体匹配**：务必在 `variants` 数组中包含正文中出现的所有屈折形式，确保高亮功能生效。
3. **零命令行干预**：Agent 完成数据写入与 `npm run build` 后，只需将生成的 HTML 文件路径提供给用户即可，切勿让用户手动敲终端命令。
