import { useState } from 'react';
import { QUESTIONS } from './questions';

const LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = QUESTIONS.length;

function Diagram({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`rounded-lg border border-slate-200 bg-white ${className}`} />;
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[index];
  const picked = answers[index];
  const answered = picked !== undefined;
  const isLast = index === TOTAL - 1;
  const answeredCount = Object.keys(answers).length;
  const progress = ((finished ? TOTAL : answeredCount) / TOTAL) * 100;

  const choose = (i: number) => setAnswers((prev) => ({ ...prev, [index]: i }));

  const next = () => {
    if (isLast) {
      setFinished(true);
      window.scrollTo({ top: 0 });
    } else {
      setIndex(index + 1);
    }
  };

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
    window.scrollTo({ top: 0 });
  };

  const header = (
    <div className="bg-slate-900 text-white p-6 pb-8 relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Sets and Operations Quiz</h1>
      <p className="text-slate-300 font-medium tracking-wide text-sm">
        A⁺ SERIES – CORE MATHEMATICS · QUESTIONS 46 – 69
      </p>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-800">
        <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );

  // ---------- Completion (no right/wrong information) ----------
  if (finished) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {header}
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-extrabold mb-2 text-center">Quiz Complete</h2>
            <p className="text-center text-slate-500 font-medium mb-8">
              You answered {answeredCount} of {TOTAL} questions. Here are the answers you chose.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {QUESTIONS.map((qq, i) => (
                <div key={qq.num} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-500">Q{qq.num}</span>
                  <span className="font-bold text-slate-800">
                    {answers[i] === undefined ? '–' : LETTERS[answers[i]]}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={restart}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Question view ----------
  const count = q.options?.length ?? q.optionImages?.length ?? 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {header}

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Question {q.num} · {index + 1} of {TOTAL}
            </span>
            <span className="text-sm font-semibold text-slate-500">{q.source}</span>
          </div>

          {q.intro && <p className="text-sm italic text-slate-500 mb-2">{q.intro}</p>}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-snug whitespace-pre-line">{q.text}</h2>

          {q.image && <Diagram src={q.image} alt={`Diagram for question ${q.num}`} className="mb-6 w-full max-w-md" />}

          <div className={q.optionImages ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6' : 'flex flex-col gap-3 mb-6'}>
            {Array.from({ length: count }).map((_, i) => {
              const isPicked = picked === i;
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium flex items-center ${
                    isPicked
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full mr-4 text-sm font-bold ${
                      isPicked ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {LETTERS[i]}
                  </span>
                  {q.options ? (
                    <span>{q.options[i]}</span>
                  ) : (
                    <img src={q.optionImages![i]} alt={`Option ${LETTERS[i]}`} className="rounded-md bg-white max-h-40 w-auto" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-slate-100">
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
              className="px-4 py-2 rounded-lg font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={next}
              disabled={!answered}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              {isLast ? 'Finish' : 'Next Question →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
