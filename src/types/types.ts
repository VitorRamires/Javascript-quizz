import type { Dispatch, SetStateAction } from "react";

export interface QuestionType {
  questionDescription: string;
  questionID: number;
  answerOptions: string[];
  correctAnswer: number;
}

export interface AnswerInfo {
  choosedOption: number;
  question: number;
  isCorrect: boolean;
  questionDescription: string;
  answerText: string;
}

export type AnswerType = Record<number, AnswerInfo>;

export interface AnswerStorageContextType {
  answers: AnswerType;
  setAnswers: Dispatch<SetStateAction<AnswerType>>;
  isAnswered: boolean;
  setIsAnswered: Dispatch<SetStateAction<boolean>>;
}

export interface BgInterface {
  background: string;
}
