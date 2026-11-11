import { useState } from 'react';
import { QUESTIONS } from './questions';

const LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = QUESTIONS.length;

function Diagram({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg border border-slate-200 bg-white ${className}`}
    />
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const [wrongOnly, setWrongOnly] = useState(false);

  const q = QUESTIONS[index];
  const picked = answers[index];
  const answered = picked !== undefined;
  const isLast = index === TOTAL - 1;
  const answeredCount = Object.keys(answers).length;
  const progress = ((finished ? TOTAL : answeredCount) / TOTAL) * 100;

  const score = QUESTIONS.reduce((s, qq, i) => (answers[i] === qq.answer ? s + 1 : s), 0);

  const choose = (i: number) => {
    if (answered) return;
    setAnswers((prev) => ({ ...prev, [index]: i }));
  };

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
    setWrongOnly(false);
    window.scrollTo({ top: 0 });
  };

  const header = (
    <div className="bg-slate-900 text-white p-6 pb-8 relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Sets and Operations Quiz</h1>
      <p className="text-slate-300 font-medium tracking-wide text-sm">
        A⁺ SERIES – CORE MATHEMATICS · QUESTIONS 46 – 69
      </p>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-800">
        <div
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  // ---------- Results ----------
  if (finished) {
    const pct = Math.round((score / TOTAL) * 100);
    const passed = pct >= 70;
    const list = QUESTIONS.map((qq, i) => ({ qq, i })).filter(
      ({ qq, i }) => !wrongOnly || answers[i] !== qq.answer
    );

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 mb-8 text-center p-8 md:p-12 relative overflow-hidden">
            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 ${passed ? 'bg-green-500' : 'bg-red-500'}`} />
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-10 ${passed ? 'bg-green-500' : 'bg-red-500'}`} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Quiz Results</h2>
            <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-slate-50 border-8 border-slate-100 shadow-inner mb-4 relative z-10">
              <span className="text-4xl font-black text-slate-800">
                {score}
                <span className="text-2xl text-slate-400">/{TOTAL}</span>
              </span>
            </div>
            <p className="text-slate-500 font-semibold mb-2 relative z-10">{pct}%</p>
            <h3 className={`text-2xl font-bold mb-2 relative z-10 ${passed ? 'text-green-600' : 'text-red-500'}`}>
              {passed ? 'Excellent Work!' : 'Keep Practicing!'}
            </h3>
            <p className="text-slate-500 font-medium relative z-10 mb-8 max-w-lg mx-auto">
              {passed
                ? 'You have a solid grasp of set operations, Venn diagrams and cardinality problems.'
                : 'Review the answers below to see where you can improve.'}
            </p>
            <button
              onClick={restart}
              className="relative z-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Retake Quiz
            </button>
          </div>

          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-2xl font-bold text-slate-800">Detailed Review</h3>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={wrongOnly}
                onChange={(e) => setWrongOnly(e.target.checked)}
                className="w-4 h-4"
              />
              Wrong answers only
            </label>
          </div>

          {list.length === 0 && (
            <p className="text-center text-slate-500 font-medium py-10">Nothing to show: every answer was correct.</p>
          )}

          <div className="flex flex-col gap-6">
            {list.map(({ qq, i }) => {
              const ua = answers[i];
              const ok = ua === qq.answer;
              const showText = (k: number | undefined) =>
                k === undefined
                  ? 'No answer'
                  : qq.options
                  ? `${LETTERS[k]}. ${qq.options[k]}`
                  : `Diagram ${LETTERS[k]}`;
              return (
                <div key={qq.num} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                  <div className={`p-4 border-b flex items-center justify-between ${ok ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                    <h4 className="font-bold text-slate-800">Question {qq.num}</h4>
                    <span className={`text-xs font-bold uppercase tracking-wider ${ok ? 'text-green-700' : 'text-red-600'}`}>
                      {ok ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    {qq.intro && <p className="text-sm italic text-slate-500 mb-2">{qq.intro}</p>}
                    <p className="text-lg font-semibold text-slate-800 mb-4 whitespace-pre-line">{qq.text}</p>
                    {qq.image && <Diagram src={qq.image} alt={`Diagram for question ${qq.num}`} className="mb-4 max-w-sm" />}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium mb-4">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <span className="block text-slate-500 mb-1 text-xs uppercase tracking-wider font-bold">Your Answer</span>
                        <span className={`text-base ${ok ? 'text-green-700' : 'text-red-600'}`}>{showText(ua)}</span>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <span className="block text-blue-500 mb-1 text-xs uppercase tracking-wider font-bold">Correct Answer</span>
                        <span className="text-base text-blue-900">{showText(qq.answer)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
              const isCorrect = q.answer === i;
              let style = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';
              let badge = 'bg-slate-200 text-slate-600';
              if (answered) {
                if (isCorrect) {
                  style = 'border-green-500 bg-green-50 text-green-900';
                  badge = 'bg-green-500 text-white';
                } else if (isPicked) {
                  style = 'border-red-400 bg-red-50 text-red-900';
                  badge = 'bg-red-500 text-white';
                } else {
                  style = 'border-slate-200 text-slate-400';
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={answered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium flex items-center ${style} ${answered ? 'cursor-default' : ''}`}
                >
                  <span className={`inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full mr-4 text-sm font-bold ${badge}`}>
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

          {answered && (
            <div className="mb-6">
              <p className={`font-bold mb-3 ${picked === q.answer ? 'text-green-600' : 'text-red-500'}`}>
                {picked === q.answer
                  ? 'Correct!'
                  : `Not quite. The correct answer is ${LETTERS[q.answer]}.`}
              </p>
            </div>
          )}

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
              {isLast ? 'See Results' : 'Next Question →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
