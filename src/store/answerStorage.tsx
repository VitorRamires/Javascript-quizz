import { useContext, useState } from "react";
import type { ReactNode } from "react";
import { AnswerStorageContext } from "../utilities/context";
import type { AnswerType } from "../types/types";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "./questionCounter";

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswerType>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const questionCounter = useContext(QuestionCounterContext);
  const currentQuestion = questionCounter?.questionCounter ?? 0;

  function saveSkippedAnswer() {
    const { questionDescription, answerOptions, correctAnswer } =
      DATA_QUESTIONS[currentQuestion];
    if (!answers[currentQuestion]) {
      saveAnswer(
        currentQuestion,
        -1,
        false,
        answerOptions[correctAnswer],
        questionDescription,
        true,
      );
    }
  }

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

  const value = { answers, isAnswered, setIsAnswered, saveAnswer, saveSkippedAnswer };

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
