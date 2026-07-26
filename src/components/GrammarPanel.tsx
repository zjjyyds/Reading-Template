import { Lightbulb, MessageSquare } from 'lucide-react';
import { Phrase, ArticleData } from '../types';

interface Props {
  phrases: Phrase[];
  grammarNotes: ArticleData['grammarNotes'];
}

export default function GrammarPanel({ phrases, grammarNotes }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="p-5 border-b border-neutral-100 flex items-center gap-3 bg-neutral-50/50">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Lightbulb className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-neutral-800 text-lg">Phrases & Grammar</h3>
      </div>
      
      <div className="p-5 space-y-6">
        {/* Phrases Section */}
        {phrases.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Key Phrases</h4>
            <div className="space-y-3">
              {phrases.map((phrase, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                  <div className="flex gap-2 items-start mb-2">
                    <MessageSquare className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-neutral-800">{phrase.phrase}</p>
                      <p className="text-sm text-neutral-600">{phrase.chinese}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 italic pl-6">"{phrase.example}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grammar Section */}
        {grammarNotes.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Grammar Notes</h4>
            <div className="space-y-3">
              {grammarNotes.map((note, idx) => (
                <div key={idx} className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50">
                  <p className="text-sm font-medium text-neutral-800 mb-2 italic">
                    "{note.sentence}"
                  </p>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    {note.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
