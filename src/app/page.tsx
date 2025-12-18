"use client";

import { type FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ContactForm } from "@/components/ContactForm";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import logo from "@/public/logo.svg";
import { QuizStep } from "@/components/QuizStep";
import { ResultStep } from "@/components/ResultStep";
import { useCountdown } from "@/hooks/useCountdown";
import {
  ACTUARIAL_QUESTIONS,
  QUESTIONS_PER_SESSION,
  pickRandomQuestions,
  type Question,
} from "@/lib/questions";
import { contactSchema, type ContactSchema } from "@/lib/validators";

type Step = "contact" | "quiz" | "result";
type BreakdownEntry = {
  id: string;
  prompt: string;
  userAnswer: string | null;
  isCorrect: boolean;
  correctAnswer: string;
};

export default function Home() {
  const [step, setStep] = useState<Step>("contact");
  const [contact, setContact] = useState<ContactSchema>({
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
  });
  const [contactErrors, setContactErrors] = useState<
    Partial<Record<keyof ContactSchema, string>>
  >({});
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>(() =>
    pickRandomQuestions(ACTUARIAL_QUESTIONS, QUESTIONS_PER_SESSION)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizError, setQuizError] = useState<string | null>(null);
  const [result, setResult] = useState<{ score: number; total: number } | null>(
    null
  );
  const [breakdown, setBreakdown] = useState<BreakdownEntry[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const timerStartRef = useRef<number>(Date.now());
  const currentQuestion = sessionQuestions[currentIndex];

  const completedRatio = useMemo(() => {
    if (step === "contact") return 0.2;
    if (step === "quiz") {
      return 0.2 + (currentIndex / QUESTIONS_PER_SESSION) * 0.6;
    }
    return 1;
  }, [currentIndex, step]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(contact);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setContactErrors({
        fullName: fieldErrors.fullName?.[0],
        organizationName: fieldErrors.organizationName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
      });
      return;
    }
    setContactErrors({});
    setStep("quiz");
  };

  const finalizeScore = useCallback(() => {
    const detail = sessionQuestions.map((question) => {
      const userAnswer = answers[question.id] ?? null;
      const isCorrect = userAnswer === question.answer;
      return {
        id: question.id,
        prompt: question.prompt,
        userAnswer,
        isCorrect,
        correctAnswer: question.answer,
      };
    });
    const score = detail.filter((item) => item.isCorrect).length;
    setBreakdown(detail);
    setResult({ score, total: sessionQuestions.length });
    setStep("result");
    setHasSubmitted(false);
  }, [answers, sessionQuestions]);

  const timeLeft = useCountdown(20, [currentIndex, step]);

  useEffect(() => {
    if (step === "quiz") {
      timerStartRef.current = Date.now();
    }
  }, [currentIndex, step]);

  const handleAdvance = useCallback(
    (autoAdvance = false) => {
      if (step !== "quiz" || !currentQuestion) return;
      const hasAnswer = Boolean(answers[currentQuestion.id]);
      const isLast = currentIndex === sessionQuestions.length - 1;

      if (!hasAnswer && !autoAdvance && timeLeft > 0) {
        setQuizError("Please select an answer or wait for the timer to expire.");
        return;
      }
      setQuizError(null);

      if (isLast) {
        finalizeScore();
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [answers, currentIndex, currentQuestion, finalizeScore, sessionQuestions.length, step, timeLeft]
  );

  useEffect(() => {
    if (step === "quiz" && timeLeft === 0) {
      const elapsed = Date.now() - timerStartRef.current;
      if (elapsed < 19000) return; // avoid any premature auto-advance
      handleAdvance(true);
    }
  }, [handleAdvance, step, timeLeft]);

  const handleAnswer = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setQuizError(null);
  }, []);

  const handleContactChange = useCallback((next: ContactSchema) => {
    setContact(next);
  }, []);

  const resetFlow = useCallback(() => {
    setContact({
      fullName: "",
      organizationName: "",
      email: "",
      phone: "",
    });
    setAnswers({});
    setResult(null);
    setBreakdown([]);
    setSessionQuestions(pickRandomQuestions(ACTUARIAL_QUESTIONS, QUESTIONS_PER_SESSION));
    setCurrentIndex(0);
    setStep("contact");
    setQuizError(null);
    setHasSubmitted(false);
  }, []);

  const isWinner = step === "result" && result?.score === sessionQuestions.length;

  useEffect(() => {
    if (step === "result" && result && !hasSubmitted) {
      setHasSubmitted(true);
      void fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: contact.fullName,
          organizationName: contact.organizationName,
          email: contact.email,
          phone: contact.phone,
          score: result.score,
          total: result.total,
        }),
      }).catch((error) => {
        console.error("Failed to send to sheet", error);
      });
    }
  }, [contact, hasSubmitted, result, step]);

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-6 text-slate-900 sm:px-5 sm:py-8 lg:px-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-blue-50 sm:gap-6 sm:p-7 lg:gap-8 lg:p-9">
        {step !== "quiz" && (
          <header className="space-y-3 text-center sm:space-y-4">
            <div className="flex justify-center">
              <img src="/logo.png" alt="Actuaria Consultants" className="h-12 w-auto sm:h-14" />
            </div>
            <h1 className="text-[26px] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
             Take a quick test
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
             A perfect score unlocks a surprise gift!!!
            </p>
          </header>
        )}

        <ProgressIndicator ratio={completedRatio} step={step} />

        {step === "contact" && (
          <ContactForm
            contact={contact}
            errors={contactErrors}
            onChange={handleContactChange}
            onSubmit={handleContactSubmit}
          />
        )}

        {step === "quiz" && currentQuestion && (
          <QuizStep
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            total={sessionQuestions.length}
            answers={answers}
            timer={timeLeft}
            quizError={quizError}
            onAnswer={handleAnswer}
            onAdvance={() => handleAdvance(false)}
          />
        )}

        {step === "result" && result && (
          <ResultStep
            result={result}
            breakdown={breakdown}
            questions={sessionQuestions}
            isWinner={isWinner}
            onReset={resetFlow}
          />
        )}
      </div>
    </div>
  );
}
