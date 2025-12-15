import { useEffect, useState } from "react";

/**
 * Simple countdown hook. Resets whenever `resetDeps` change.
 * Calls `onExpire` once when it reaches zero.
 */
export function useCountdown(
  durationSeconds: number,
  resetDeps: unknown[],
  onExpire?: () => void
) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);

  useEffect(() => {
    setTimeLeft(durationSeconds);
  }, [durationSeconds, ...resetDeps]);

  useEffect(() => {
    if (timeLeft <= 0) return undefined;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  return timeLeft;
}

