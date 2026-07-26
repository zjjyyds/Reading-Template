export interface Vocabulary {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  chinese: string;
  example: string;
  exampleChinese: string;
}

export interface Phrase {
  phrase: string;
  chinese: string;
  example: string;
}

export interface Paragraph {
  id: string;
  english: string;
  chinese: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ArticleData {
  title: string;
  difficulty: string;
  wordCount: number;
  topic: string;
  summary: string;
  paragraphs: Paragraph[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  grammarNotes: {
    sentence: string;
    explanation: string;
  }[];
  quiz: QuizQuestion[];
}
