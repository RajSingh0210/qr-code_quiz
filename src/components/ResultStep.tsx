import { type Question } from "@/lib/questions";

type BreakdownEntry = {
  id: string;
  prompt: string;
  userAnswer: string | null;
  isCorrect: boolean;
  correctAnswer: string;
};

type Props = {
  result: { score: number; total: number };
  breakdown: BreakdownEntry[];
  questions: Question[];
  isWinner: boolean;
  onReset: () => void;
};

export function ResultStep({ result, breakdown, questions, isWinner, onReset }: Props) {
  const isPerfectScore = result.score === result.total;
  const isHighScore = result.score >= 5;

  return (
    <section className="space-y-6 rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm sm:p-8 sm:shadow-md">
      <div className="space-y-4">
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ring-1 ${
          isPerfectScore 
            ? "bg-orange-100 text-orange-700 ring-orange-200" 
            : "bg-blue-100 text-blue-800 ring-blue-200"
        }`}>
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Quiz Completed
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Score: {result.score}/{result.total}
          </h2>
          <div className="space-y-2">
            {isHighScore ? (
              <>
                <p className="text-2xl font-bold text-orange-600 sm:text-3xl">
                 Congratulations!
                </p>
                <p className="text-base text-slate-600 sm:text-lg">
                 You are the winner!
                </p>
              </>
            ) : (
              <>
                <p className="text-xl font-semibold text-slate-800 sm:text-2xl">
                  Oops!!!
                </p>
                <p className="text-base text-slate-600 sm:text-lg">
                Thank you for taking the quiz!
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

