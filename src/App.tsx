import { useState } from 'react';
import { BookOpen, Calendar, Library } from 'lucide-react';
import { allArticles } from './data/articles';
import ArticleReader from './components/ArticleReader';
import VocabularyPanel from './components/VocabularyPanel';
import GrammarPanel from './components/GrammarPanel';
import QuizPanel from './components/QuizPanel';

export default function App() {
  const [showChinese, setShowChinese] = useState(true);
  const [selectedId, setSelectedId] = useState<string>(
    allArticles[0]?.id || allArticles[0]?.date || '0'
  );

  const currentArticle = 
    allArticles.find(a => (a.id || a.date) === selectedId) || allArticles[0];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pb-20">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-neutral-900 leading-tight">考研英语阅读精读助手</h1>
              <p className="text-xs text-neutral-500 hidden sm:block">Reading Assistant for Postgraduate Entrance Exam</p>
            </div>
          </div>

          {/* Article Selector & Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Article Selector Dropdown */}
            <div className="relative flex items-center gap-2 bg-neutral-100/80 hover:bg-neutral-100 rounded-xl px-3 py-1.5 transition-colors border border-neutral-200/60">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="bg-transparent text-sm font-medium text-neutral-800 focus:outline-none cursor-pointer pr-1"
              >
                {allArticles.map((article, idx) => {
                  const val = article.id || article.date || String(idx);
                  return (
                    <option key={val} value={val}>
                      {article.date ? `[${article.date}] ` : ''}{article.title}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Total Articles Count Badge */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-lg border border-blue-100">
              <Library className="w-3.5 h-3.5" />
              <span>已收录 {allArticles.length} 篇</span>
            </div>

            {/* Translation Toggle */}
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-600 cursor-pointer bg-neutral-50 hover:bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200 transition-colors">
              <input 
                type="checkbox" 
                checked={showChinese} 
                onChange={(e) => setShowChinese(e.target.checked)}
                className="rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs sm:text-sm">显示译文</span>
            </label>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Article */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <ArticleReader article={currentArticle} showChinese={showChinese} />
          </div>

          {/* Right Column: Study Tools */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <VocabularyPanel vocabulary={currentArticle.vocabulary} />
            <GrammarPanel phrases={currentArticle.phrases} grammarNotes={currentArticle.grammarNotes} />
            <QuizPanel questions={currentArticle.quiz} />
          </div>
        </div>
      </main>
    </div>
  );
}
