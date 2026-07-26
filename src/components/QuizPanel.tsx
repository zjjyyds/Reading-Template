import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface Props {
  questions: QuizQuestion[];
}

export default function QuizPanel({ questions }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (showResults[qIdx]) return;
    setAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const checkAnswer = (qIdx: number) => {
    if (answers[qIdx] !== undefined) {
      setShowResults(prev => ({ ...prev, [qIdx]: true }));
    }
  };

  if (!questions || questions.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="p-5 border-b border-neutral-100 flex items-center gap-3 bg-neutral-50/50">
        <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-neutral-800 text-lg">Comprehension Check</h3>
      </div>
      
      <div className="p-5 space-y-8">
        {questions.map((q, qIdx) => {
          const isAnswered = answers[qIdx] !== undefined;
          const isChecked = showResults[qIdx];
          const isCorrect = answers[qIdx] === q.correctAnswer;

          return (
            <div key={qIdx} className="space-y-4">
              <p className="font-medium text-neutral-800">
                <span className="text-neutral-400 mr-2">{qIdx + 1}.</span>
                {q.question}
              </p>
              
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  let buttonClass = "w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ";
                  
                  if (isChecked) {
                    if (oIdx === q.correctAnswer) {
                      buttonClass += "bg-emerald-50 border-emerald-200 text-emerald-900";
                    } else if (oIdx === answers[qIdx]) {
                      buttonClass += "bg-rose-50 border-rose-200 text-rose-900";
                    } else {
                      buttonClass += "bg-white border-neutral-200 text-neutral-500 opacity-50";
                    }
                  } else {
                    if (answers[qIdx] === oIdx) {
                      buttonClass += "bg-blue-50 border-blue-300 text-blue-900 ring-1 ring-blue-300";
                    } else {
                      buttonClass += "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={isChecked}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {isChecked && oIdx === q.correctAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        {isChecked && oIdx === answers[qIdx] && oIdx !== q.correctAnswer && <XCircle className="w-4 h-4 text-rose-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isChecked && isAnswered && (
                <button
                  onClick={() => checkAnswer(qIdx)}
                  className="w-full py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  Check Answer
                </button>
              )}

              {isChecked && (
                <div className={`p-4 rounded-xl text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                  <p className="font-bold mb-1">{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
