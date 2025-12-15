import { type Question } from "@/lib/questions";

type Props = {
  currentQuestion: Question;
  currentIndex: number;
  total: number;
  answers: Record<string, string>;
  timer: number;
  quizError: string | null;
  onAnswer: (questionId: string, optionId: string) => void;
  onAdvance: () => void;
};

export function QuizStep({
  currentQuestion,
  currentIndex,
  total,
  answers,
  timer,
  quizError,
  onAnswer,
  onAdvance,
}: Props) {
  const checkedAnswer = answers[currentQuestion.id];

  return (
    <section className="space-y-5 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm sm:p-7 sm:shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 ring-1 ring-blue-200">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Step 2
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Timed quiz</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Answer within 15 seconds per question
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Time left</p>
            <p
              className={`text-2xl font-bold ${
                timer <= 5 ? "text-rose-500" : timer <= 10 ? "text-amber-500" : "text-emerald-600"
              }`}
            >
              {timer}s
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-50 text-base font-bold text-slate-900 sm:h-14 sm:w-14 sm:text-lg">
            {currentIndex + 1}/{total}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-7">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 sm:gap-6">
          <div className="mb-1 inline-flex w-full items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-200 sm:w-fit">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Question {currentIndex + 1} of {total}
          </div>
          <p className="text-base font-semibold leading-relaxed text-slate-900 sm:text-2xl sm:leading-9 text-balance break-words">
            {currentQuestion.prompt}
          </p>
          {currentQuestion.helpText && (
            <p className="text-sm text-slate-600 sm:text-base">{currentQuestion.helpText}</p>
          )}
          <div className="grid gap-3 sm:gap-4">
            {currentQuestion.options.map((option) => {
              const checked = checkedAnswer === option.id;
              return (
                <label
                  key={option.id}
                  className={`group flex cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3 transition-all sm:gap-4 sm:px-6 sm:py-5 ${
                    checked
                      ? "border-blue-400 bg-white shadow-sm shadow-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    className="mt-0.5 h-5 w-5 shrink-0 accent-blue-600 sm:h-5 sm:w-5"
                    name={currentQuestion.id}
                    value={option.id}
                    checked={checked}
                    onChange={() => onAnswer(currentQuestion.id, option.id)}
                  />
                  <span
                    className={`flex-1 text-sm leading-6 sm:text-base sm:leading-7 ${
                      checked ? "font-semibold text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {quizError && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
          <p className="text-sm font-medium text-rose-600">{quizError}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onAdvance}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg hover:shadow-orange-200/70 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
          disabled={!checkedAnswer && timer > 0}
        >
          {currentIndex === total - 1 ? "See Score" : "Next Question"}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

