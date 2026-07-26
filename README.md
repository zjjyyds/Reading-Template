# Agent Instruction: 考研英语一 Reading Assistant Generator

This repository contains a React-based Bilingual Reading Assistant. Your primary task as an AI Agent is to generate or update the `src/sampleData.ts` file based on English reading materials provided by the user (often pasted from PDFs, The Economist, Nature, etc.).

**Crucial Requirement:** The output must strictly align with the difficulty, style, and testing focus of **考研英语一 (China's National Entrance Examination for Postgraduate in English I)**.

## 🎯 Core Objectives

When the user provides an English article, you must transform it into the structured `ArticleData` format.

### 1. Text Cleanup and Translation (翻译与精读)
- **Context is King**: Fix any OCR errors or weird line breaks from the user's prompt. 
- **Refined Translation**: Do not use rigid, machine-like translations. 考研英语 translations require precise understanding of complex clauses, idioms, and formal academic tone. Provide highly accurate, context-aware Chinese translations for each paragraph.

### 2. Vocabulary & Phrases (考研大纲核心词汇与熟词僻义)
- **Target Words**: Extract 5-15 words that are core to the 考研英语 syllabus (e.g., formal verbs, abstract nouns, academic adjectives). Pay special attention to **熟词僻义** (familiar words with uncommon meanings in the specific context).
- **Details**: Provide accurate IPA phonetics, part of speech, exact English definition, and accurate Chinese meaning **in this specific context**.
- **Contextual Example**: Extract the exact sentence from the article as the `example`.

### 3. Grammar Analysis (长难句解析 - Crucial for 考研)
- **Target Sentences**: Select 2-3 long, complex sentences (长难句) featuring multiple clauses, inversions, omissions, or complex modifiers.
- **Explanation**: Provide a detailed syntactic analysis in Chinese. Break down the main clause (句子主干), subordinate clauses (从句), and specific grammatical phenomena (e.g., 独立主格, 倒装, 虚拟语气, 介词短语后置).

### 4. Comprehension Quiz (考研题型)
- **Question Types**: Design 2-3 multiple-choice questions matching the 考研 style:
  - Detail/Fact (细节题)
  - Main Idea (主旨大意题)
  - Inference (推理引申题)
  - Author's Attitude/Tone (作者态度题)
  - Vocabulary in Context (词义猜测题)
- **Distractors**: Ensure the incorrect options (干扰项) are plausible and mimic common trap types in the exam (e.g., 正反混淆, 偷换概念, 过度引申, 答非所问).
- **Explanation**: Provide a detailed explanation for why the correct answer is right and why others are wrong, referencing specific paragraphs.

## 📁 Output Format (`src/sampleData.ts`)

You must generate valid TypeScript code adhering to these interfaces defined in `src/types.ts`:

```typescript
export interface Vocabulary {
  word: string;
  phonetic: string;
  partOfSpeech: string; // e.g., "v.", "n.", "adj."
  definition: string;   // English definition
  chinese: string;      // Chinese translation
  example: string;      // Example sentence from the article
  exampleChinese: string; // Chinese translation of the example
}

export interface Phrase {
  phrase: string;
  chinese: string;
  example: string; // Example sentence from the article
}

export interface Paragraph {
  id: string;      // e.g., "p1", "p2"
  english: string;
  chinese: string; // High-quality, context-aware Chinese translation
}

export interface QuizQuestion {
  question: string;
  options: string[]; // Array of 4 options
  correctAnswer: number; // Index of the correct option (0-3)
  explanation: string; // Detailed explanation of the answer
}

export interface ArticleData {
  title: string;
  difficulty: string; // e.g., "考研英语一"
  wordCount: number;
  topic: string; // e.g., "Technology", "Science", "Culture"
  summary: string; // A brief summary of the article
  paragraphs: Paragraph[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  grammarNotes: {
    sentence: string; // The complex sentence from the text
    explanation: string; // Grammar analysis in Chinese
  }[];
  quiz: QuizQuestion[];
}
```

## 🛠️ Step-by-Step Workflow
1. **Receive Input**: Read the user's provided English text and potentially flawed translation.
2. **Clean & Chunk**: Fix line breaks, merge broken sentences, and format into paragraph chunks.
3. **Draft Data**: Translate paragraphs, select target vocabulary/phrases, analyze 2-3 long sentences (长难句), and create 考研-style quiz questions.
4. **Write File**: Overwrite `src/sampleData.ts` with the new valid TypeScript object.

## ⚠️ Important System Rules
- **DO NOT** modify UI components (e.g., `ArticleReader.tsx`) unless specifically requested by the user.
- **ONLY** modify `src/sampleData.ts` to swap reading materials.
- Ensure `vocab.word` matches the exact root form or the specific form used in the text so the UI's `<TextHighlighter />` component can correctly highlight it.
- Ensure all string quotes and special characters are properly escaped in TypeScript.
