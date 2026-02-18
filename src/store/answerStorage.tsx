import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { AnswerStorageContext } from "../utilities/context";
import type { AnswerType } from "../types/types";

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswerType>({});
  const [isAnswered, setIsAnswered] = useState(false);

  const value = useMemo(
    () => ({
      answers,
      isAnswered,
      setAnswers,
      setIsAnswered,
    }),
    [answers, isAnswered],
  );

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
