# Bilingual Reading Assistant - Agent Instruction Guide

This guide is designed to help AI agents generate the required data structure for the Bilingual Reading Assistant application. 

## 🎯 Objective
Your task is to take an English article (provided by the user, often pasted from a PDF) and transform it into a highly structured TypeScript data file (`src/sampleData.ts`) that powers the Reading Assistant UI. 

The user may provide text that is poorly translated or OCR'd. Your job is to clean up the English text, provide high-quality Chinese translations, and extract educational components (vocabulary, grammar, quizzes).

## 📁 Target Output
You need to generate or overwrite the `src/sampleData.ts` file, ensuring it exports a valid `ArticleData` object matching the TypeScript interfaces.

### TypeScript Interfaces Reference
```typescript
export interface Vocabulary {
  word: string;
  phonetic: string;
  partOfSpeech: string; // e.g., "v.", "n.", "adj."
  definition: string;   // English definition
  chinese: string;      // Chinese translation
  example: string;      // Example sentence (preferably from the article)
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
  explanation: string; // Explanation of why the answer is correct
}

export interface ArticleData {
  title: string;
  difficulty: string; // e.g., "Intermediate", "Advanced (The Economist)"
  wordCount: number;
  topic: string; // e.g., "Technology", "Science", "Culture"
  summary: string; // A brief bilingual or Chinese summary of the article
  paragraphs: Paragraph[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  grammarNotes: {
    sentence: string; // The complex sentence from the text
    explanation: string; // Grammar explanation in Chinese
  }[];
  quiz: QuizQuestion[];
}
```

## 🛠️ Step-by-Step Processing Instructions

1. **Clean and Format the Source Text**: 
   - Fix any OCR errors or weird line breaks in the English text.
   - Split the text into logical paragraphs.

2. **Translate (or Correct Translations)**:
   - Provide a natural, fluent Chinese translation for each paragraph.
   - **Crucial**: Do not use machine-translation style. Translate according to the context. Fix any bad translations if the user provided them.

3. **Extract Vocabulary & Phrases**:
   - Identify 5-10 key vocabulary words and 3-5 useful phrases.
   - For vocabulary, provide IPA phonetics, part of speech, exact English definition, and accurate Chinese meaning.
   - Extract the sentence where the word/phrase is used in the article as the `example`.

4. **Analyze Grammar**:
   - Pick 2-3 long, complex, or structurally interesting sentences from the article.
   - Provide a detailed Chinese explanation of the grammatical structure (e.g., identifying main clauses, non-restrictive relative clauses, specific idioms).

5. **Generate a Comprehension Quiz**:
   - Create 2-3 multiple-choice questions testing the user's understanding of the article.
   - Provide 4 options, indicate the `correctAnswer` index (0-3), and write an `explanation` referencing specific paragraphs.

## 📝 Example Output Format

```typescript
import { ArticleData } from './types';

export const sampleArticle: ArticleData = {
  title: "Article Title",
  difficulty: "Advanced",
  wordCount: 500,
  topic: "Science",
  summary: "Brief summary of the article.",
  paragraphs: [
    {
      id: "p1",
      english: "This is the first paragraph of the text.",
      chinese: "这是文章的第一段。"
    }
  ],
  vocabulary: [
    {
      word: "example",
      phonetic: "/ɪɡˈzæmpəl/",
      partOfSpeech: "n.",
      definition: "a representative form or pattern",
      chinese: "例子",
      example: "This is an example sentence.",
      exampleChinese: "这是一个例句。"
    }
  ],
  phrases: [],
  grammarNotes: [],
  quiz: []
};
```

## ⚠️ Important Rules for the Agent
- **DO NOT** change the UI components (`ArticleReader.tsx`, etc.) unless the user specifically asks for a new feature.
- **ONLY** modify `src/sampleData.ts` to swap out the reading material.
- Ensure the `id` for paragraphs starts at "p1" and increments sequentially.
- Ensure all quotes and special characters are properly escaped in the TypeScript string.
- Vocabulary highlighting in the UI works by matching the `word` property. Ensure the `word` exactly matches its root or conjugated form as it appears in the text for best highlighting results.
