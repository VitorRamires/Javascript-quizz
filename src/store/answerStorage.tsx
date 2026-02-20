import { useState } from "react";
import type { ReactNode } from "react";
import { AnswerStorageContext } from "../utilities/context";
import type { AnswerType } from "../types/types";

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswerType>({});
  const [isAnswered, setIsAnswered] = useState(false);

  function saveAnswer(
    actualQuestion: number,
    selectedOption: number,
    isCorrect: boolean,
    answerText: string,
    questionDescription: string,
    skipped: boolean = false,
  ) {
    setAnswers((prev) => ({
      ...prev,
      [actualQuestion]: {
        chosenOption: selectedOption,
        isCorrect,
        question: actualQuestion,
        answerText,
        questionDescription,
        skipped,
      },
    }));
  }

  const value = { answers, isAnswered, setIsAnswered, saveAnswer };

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
