import type { Dispatch, SetStateAction } from "react";

export interface QuestionType {
  question: string;
  questionID: number;
  answerOptions: string[];
  correctAnswer: number;
}


export interface AnswerInfo {
  choosedOption: number;
  isCorrect: boolean;
  question: string;
}


export type AnswerType = Record<number, AnswerInfo>;

export interface AnswerStorageContextType {
  answers: AnswerType;
  setAnswers: Dispatch<SetStateAction<AnswerType>>;
}

export interface BgInterface {
  background: string;
}