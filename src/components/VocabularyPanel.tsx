import { Volume2, BookA } from 'lucide-react';
import { Vocabulary } from '../types';

interface Props {
  vocabulary: Vocabulary[];
}

export default function VocabularyPanel({ vocabulary }: Props) {
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="p-5 border-b border-neutral-100 flex items-center gap-3 bg-neutral-50/50">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
          <BookA className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-neutral-800 text-lg">Key Vocabulary</h3>
      </div>
      
      <div className="divide-y divide-neutral-100">
        {vocabulary.map((vocab, idx) => (
          <div key={idx} className="p-5 hover:bg-neutral-50/50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-lg font-bold text-indigo-900">{vocab.word}</span>
                  <span className="text-sm text-neutral-500 font-mono">{vocab.phonetic}</span>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {vocab.partOfSpeech}
                  </span>
                </div>
              </div>
              <button
                onClick={() => speak(vocab.word)}
                className="shrink-0 text-neutral-400 hover:text-indigo-600 transition-colors"
                title="Pronounce"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-neutral-700">
                <span className="font-medium mr-1 text-neutral-900">EN:</span> 
                {vocab.definition}
              </p>
              <p className="text-neutral-700">
                <span className="font-medium mr-1 text-neutral-900">中:</span> 
                {vocab.chinese}
              </p>
              
              <div className="mt-3 pt-3 border-t border-neutral-100 bg-neutral-50/50 -mx-5 px-5 pb-1">
                <p className="text-neutral-800 italic mb-1">"{vocab.example}"</p>
                <p className="text-neutral-500">{vocab.exampleChinese}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
