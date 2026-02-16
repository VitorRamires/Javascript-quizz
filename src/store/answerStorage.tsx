import { useState } from "react";
import type { ReactNode } from "react";
import { AnswerStorageContext } from "../utilities/context";
import type { AnswerType } from "../types/types";

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswerType>({});
  const [isCorrect, setIsCorrect] = useState(false);

  const value = { answers, setAnswers, isCorrect, setIsCorrect };

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
