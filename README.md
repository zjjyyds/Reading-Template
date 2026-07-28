---
name: kaoyan-reading-assistant
description: 考研英语一双语精读与阅读理解生成器。接收英文长文（外刊、真题、新闻），自动提炼考研大纲词汇（带词形变体）、高频短语、长难句语法结构解析及真题风格阅读理解题目，追加至本地归档 src/data/articles.ts 并自动打包生成零依赖可双击打开的单文件 HTML。当用户发送英文文章、PDF 剪贴内容或要求处理考研精读材料时使用。
---

# Agent Instruction & Skill: 考研英语一 Reading Assistant Generator

This repository is an AI-Agent-driven Bilingual Reading Assistant designed for **考研英语一 (China's National Entrance Examination for Postgraduate in English I)**.

Any AI Agent reading this repository or skill file MUST follow the instructions below to process raw English text into structured reading materials and build offline standalone HTML artifacts.

---

## 🎯 Core Objectives & Task Execution

When the user provides an English article or prompt (pasted from The Economist, Nature, LA Times, or past exam papers), you must complete the following 5 steps autonomously:

### 1. Text Cleanup and Translation (翻译与精读)
- **Sanitize Input**: Remove OCR noise, footnote citations (e.g., `[cite: x]`), page numbers, and invalid line breaks.
- **Academic Translation**: Provide precise, context-aware Chinese translations for each paragraph (`p1`, `p2`, ...). Adhere strictly to the formal academic tone required by 考研英语一.

### 2. Syllabus Vocabulary & Variants (考研大纲核心词汇与熟词僻义)
- **Select Words**: Extract 8-15 core syllabus words (formal verbs, abstract nouns, academic adjectives, and **熟词僻义**).
- **Match Inflections (`variants`)**: Include all inflections (plurals, past tenses, present participles) used in the text inside the `variants` array so the UI's `<TextHighlighter />` highlights them properly.
- **Structure**:
  ```typescript
  {
    word: "analyze",
    variants: ["analyzes", "analyzed", "analyzing"],
    phonetic: "/ˈæn.əl.aɪz/",
    partOfSpeech: "v.",
    definition: "to examine detail in order to discover or explain it",
    chinese: "分析，剖析",
    example: "Sentence from the text containing analyze.",
    exampleChinese: "例句对应中文翻译。"
  }
  ```

### 3. Key Phrases (高频短语)
- Extract 3-5 key phrases/idioms from the text with Chinese meanings and exact example sentences.

### 4. Syntax Breakdown of Complex Sentences (长难句解析 - 考研重点)
- Select 2-3 long, complex sentences featuring multiple subordinate clauses, inversions, omissions, or complex modifiers.
- Provide a detailed Chinese syntactic analysis breaking down the main clause (句子主干), subordinate clauses (从句), and specific grammatical structures.

### 5. Exam-Style Comprehension Quiz (考研真题阅读理解)
- Design 3 multiple-choice questions matching 考研题型 (Detail, Inference, Main Idea / Tone).
- **Distractor Traps**: Ensure incorrect options reflect common exam traps (e.g. 偷换概念, 正反混淆, 过度引申, 答非所问).
- **Detailed Explanations**: Provide rationale for why the correct answer is right and why distractors are wrong.

---

## 📁 Output Target (`src/data/articles.ts`)

Append the newly created `ArticleData` object into `allArticles` array in `src/data/articles.ts` with today's date (`YYYY-MM-DD`). Always place the newest article at the top of `allArticles`:

```typescript
export const articleYYYYMMDD: ArticleData = {
  id: "YYYY-MM-DD",
  date: "YYYY-MM-DD",
  title: "Article English Title",
  difficulty: "考研英语一 (Source)",
  wordCount: 750,
  topic: "Category",
  summary: "Brief summary of the article",
  paragraphs: [ /* ... */ ],
  vocabulary: [ /* ... */ ],
  phrases: [ /* ... */ ],
  grammarNotes: [ /* ... */ ],
  quiz: [ /* ... */ ]
};

export const allArticles: ArticleData[] = [
  articleYYYYMMDD, // Newest article on top
  // ... previous articles
];
```

---

## ⚡ Automated Standalone Build Process

After updating `src/data/articles.ts`, **YOU MUST EXECUTE** the following build command in the project directory:

```bash
npm run build
```

### What `npm run build` Does Automatically:
1. Bundles React, Tailwind CSS, Lucide icons, and all article data into a 100% self-contained HTML file via `vite-plugin-singlefile`.
2. Runs `scripts/archive-build.js` to create a date-named HTML file in the `readings/` folder:
   `readings/YYYY-MM-DD_Article_Title.html`
3. Automatically updates `ReadingAssistant.html` at the project root.

---

## ⚠️ System Rules for AI Agents

1. **NO MANDATORY USER TERMINAL COMMANDS**: Do NOT ask the user to run `npm run dev` or `npm run build`. Perform the build command yourself using your command tool after updating `src/data/articles.ts`.
2. **ZERO-DEPENDENCY SINGLE FILE OUTPUT**: Ensure the generated HTML files in `readings/` and root `ReadingAssistant.html` can be double-clicked directly by the user in any web browser without needing any server.
3. **ESCAPE SPECIAL CHARACTERS**: Properly escape single quotes, double quotes, and backslashes in TypeScript strings to prevent syntax errors.
