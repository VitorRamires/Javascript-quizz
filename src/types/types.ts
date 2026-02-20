import type { Dispatch, SetStateAction } from "react";

export interface QuestionType {
  questionDescription: string;
  questionID: number;
  answerOptions: string[];
  correctAnswer: number;
}

export interface AnswerInfo {
  chosenOption: number;
  question: number;
  isCorrect: boolean;
  questionDescription: string;
  answerText: string;
  skipped: boolean;
}

export type AnswerType = Record<number, AnswerInfo>;

export interface AnswerStorageContextType {
  answers: AnswerType;
  isAnswered: boolean;
  setIsAnswered: Dispatch<SetStateAction<boolean>>;
  saveAnswer: (
    actualQuestion: number,
    selectedOption: number,
    isCorrect: boolean,
    answerText: string,
    questionDescription: string,
    skipped?: boolean,
  ) => void;
}

export interface BgInterface {
  background: string;
}
