import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { sampleArticle } from './sampleData';
import ArticleReader from './components/ArticleReader';
import VocabularyPanel from './components/VocabularyPanel';
import GrammarPanel from './components/GrammarPanel';
import QuizPanel from './components/QuizPanel';

export default function App() {
  const [showChinese, setShowChinese] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pb-20">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-neutral-800">Reading Assistant</h1>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-600 cursor-pointer">
              <input 
                type="checkbox" 
                checked={showChinese} 
                onChange={(e) => setShowChinese(e.target.checked)}
                className="rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
              />
              Show Translations
            </label>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Article */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <ArticleReader article={sampleArticle} showChinese={showChinese} />
          </div>

          {/* Right Column: Study Tools */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <VocabularyPanel vocabulary={sampleArticle.vocabulary} />
            <GrammarPanel phrases={sampleArticle.phrases} grammarNotes={sampleArticle.grammarNotes} />
            <QuizPanel questions={sampleArticle.quiz} />
          </div>
        </div>
      </main>
    </div>
  );
}
