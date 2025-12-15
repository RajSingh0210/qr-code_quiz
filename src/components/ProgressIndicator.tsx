type Step = "contact" | "quiz" | "result";

export function ProgressIndicator({ ratio, step }: { ratio: number; step: Step }) {
  const steps: { id: Step; label: string }[] = [
    { id: "contact", label: "Details" },
    { id: "quiz", label: "Quiz" },
    { id: "result", label: "Score" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wide text-slate-600 sm:gap-0">
        {steps.map((entry) => (
          <span
            key={entry.id}
            className={`${entry.id === step ? "text-slate-900 font-semibold" : "text-slate-500"}`}
          >
            {entry.label}
          </span>
        ))}
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-orange-400 transition-[width] shadow-[0_1px_6px_rgba(59,130,246,0.35)]"
          style={{ width: `${Math.min(ratio, 1) * 100}%` }}
        />
      </div>
    </div>
  );
}

