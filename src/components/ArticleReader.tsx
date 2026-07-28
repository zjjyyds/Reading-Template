import { ArticleData, Vocabulary } from '../types';
import { Volume2, FileText, Square, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { lookupOfflineDict, DictEntry } from '../data/dictionary';

interface Props {
  article: ArticleData;
  showChinese: boolean;
}

const VocabWord = ({ text, vocab }: { text: string; vocab: Vocabulary }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [isOpen]);

  return (
    <span className="relative inline-block">
      <span 
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="text-indigo-700 bg-indigo-50 border-b-2 border-indigo-200 cursor-pointer px-0.5 rounded transition-colors hover:bg-indigo-100 font-medium"
      >
        {text}
      </span>
      {isOpen && (
        <span 
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[260px] bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 z-30 shadow-xl shadow-black/20"
        >
          <span className="block font-bold mb-1">{vocab.word} <span className="font-normal text-neutral-400 font-mono text-xs ml-1">{vocab.phonetic}</span></span>
          <span className="block text-indigo-200 mb-1">{vocab.chinese}</span>
          {vocab.definition && <span className="block text-neutral-300 text-xs italic">{vocab.definition}</span>}
          {/* Little triangle pointer */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-neutral-900"></span>
        </span>
      )}
    </span>
  );
};

const InteractiveText = ({ 
  text, 
  onWordClick 
}: { 
  text: string; 
  onWordClick: (word: string) => void;
}) => {
  // Regex to split words while retaining punctuation and whitespace
  const tokens = text.split(/(\b[a-zA-Z0-9'-]+\b)/g);

  return (
    <span>
      {tokens.map((token, idx) => {
        const isWord = /^[a-zA-Z0-9'-]+$/.test(token) && !/^\d+$/.test(token);
        if (isWord) {
          return (
            <span
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onWordClick(token);
              }}
              className="cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded px-0.5 transition-colors font-serif"
              title="点击离线查词"
            >
              {token}
            </span>
          );
        }
        return <span key={idx}>{token}</span>;
      })}
    </span>
  );
};

const TextHighlighter = ({ 
  text, 
  vocabulary,
  onSelectWord
}: { 
  text: string; 
  vocabulary: Vocabulary[];
  onSelectWord: (word: string) => void;
}) => {
  const sortedVocab = [...vocabulary].sort((a, b) => b.word.length - a.word.length);
  
  let parts: { text: string; isMatch: boolean; vocab?: Vocabulary }[] = [{ text, isMatch: false }];

  sortedVocab.forEach(v => {
    const newParts: typeof parts = [];
    const wordsToMatch = [v.word, ...(v.variants || [])];
    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedWords = wordsToMatch.map(escapeRegExp);
    const exactRegex = new RegExp(`(\\b(?:${escapedWords.join('|')})\\b)`, 'gi');

    parts.forEach(part => {
      if (part.isMatch) {
        newParts.push(part);
      } else {
        const split = part.text.split(exactRegex);
        split.forEach(s => {
          if (wordsToMatch.some(w => s.toLowerCase() === w.toLowerCase())) {
            newParts.push({ text: s, isMatch: true, vocab: v });
          } else if (s) {
            newParts.push({ text: s, isMatch: false });
          }
        });
      }
    });
    parts = newParts;
  });

  return (
    <span>
      {parts.map((part, i) => 
        part.isMatch && part.vocab ? (
          <VocabWord key={i} text={part.text} vocab={part.vocab} />
        ) : (
          <InteractiveText key={i} text={part.text} onWordClick={onSelectWord} />
        )
      )}
    </span>
  );
};

export default function ArticleReader({ article, showChinese }: Props) {
  const [activeParagraph, setActiveParagraph] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [lookedUpEntry, setLookedUpEntry] = useState<DictEntry | null>(null);

  const speak = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleWordClick = (word: string) => {
    const entry = lookupOfflineDict(word);
    setLookedUpEntry(entry);
  };

  const toggleSpeak = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;
    
    if (playingId === id) {
      window.speechSynthesis.cancel();
      setPlayingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      
      utterance.onstart = () => {
        setPlayingId(id);
      };
      utterance.onend = () => {
        setPlayingId(null);
      };
      utterance.onerror = () => {
        setPlayingId(null);
      };
      
      window.speechSynthesis.speak(utterance);
    }, 50);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-visible relative">
      {/* Offline Word Lookup Modal */}
      {lookedUpEntry && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setLookedUpEntry(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-neutral-100 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLookedUpEntry(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between gap-3 mb-3 pr-6">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h4 className="text-2xl font-bold text-blue-950 font-serif">{lookedUpEntry.word}</h4>
                {lookedUpEntry.phonetic && (
                  <span className="text-sm font-mono text-neutral-500">{lookedUpEntry.phonetic}</span>
                )}
                {lookedUpEntry.pos && (
                  <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md">
                    {lookedUpEntry.pos}
                  </span>
                )}
              </div>
              <button
                onClick={() => speak(lookedUpEntry.word)}
                className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-colors shrink-0"
                title="读音"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-3 border-t border-neutral-100 space-y-2">
              <div className="text-base font-medium text-neutral-800 leading-relaxed">
                {lookedUpEntry.translation}
              </div>
              <div className="text-xs text-neutral-400 flex items-center gap-1 pt-1">
                <Search className="w-3.5 h-3.5" />
                <span>离线词库快速检索结果</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="p-6 md:p-8 border-b border-neutral-100 bg-neutral-50/50">
        <div className="flex gap-2 mb-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-md">
            {article.difficulty}
          </span>
          <span className="px-2.5 py-1 text-xs font-semibold bg-neutral-100 text-neutral-600 rounded-md">
            {article.wordCount} words
          </span>
          <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-md">
            {article.topic}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-neutral-900 leading-tight mb-4 font-serif">
          {article.title}
        </h2>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-amber-800 mb-1">Summary</h3>
              <p className="text-sm text-amber-700 leading-relaxed">{article.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Paragraphs */}
      <div className="p-6 md:p-8 space-y-8">
        {article.paragraphs.map((p, index) => {
          const isActive = activeParagraph === p.id;
          const isPlayingThis = playingId === p.id;

          return (
            <div 
              key={p.id} 
              className={`group relative p-4 -mx-4 rounded-xl transition-colors ${isActive ? 'bg-blue-50/50 ring-1 ring-blue-100' : 'hover:bg-neutral-50/80'}`}
              onClick={() => setActiveParagraph(isActive ? null : p.id)}
            >
              <div className="flex gap-4">
                <div className="shrink-0 flex gap-2">
                  <div className="mt-2 w-6 text-right text-xs font-bold text-neutral-300">
                    P{index + 1}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSpeak(p.english, p.id);
                    }}
                    className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full border transition-all shadow-sm ${
                      isPlayingThis 
                        ? 'bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600' 
                        : 'bg-white text-neutral-500 border-neutral-200 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                    }`}
                    title={isPlayingThis ? "Stop reading" : "Read aloud"}
                  >
                    {isPlayingThis ? <Square className="w-3 h-3 fill-current" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-lg text-neutral-800 leading-relaxed font-serif">
                    <TextHighlighter 
                      text={p.english} 
                      vocabulary={article.vocabulary} 
                      onSelectWord={handleWordClick}
                    />
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showChinese ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                    <div className="pt-3 border-t border-neutral-100/80">
                      <p className="text-neutral-500 leading-relaxed">
                        {p.chinese}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
