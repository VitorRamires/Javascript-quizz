import type { Dispatch, SetStateAction } from "react";

export interface QuestionType {
  question: string;
  id: number;
  options: string[];
  correctAnswer: number;
}

export interface AnswersType {
  questionID: number;
  selectedAnwser: string;
}

export interface AnswerStorageContextType {
  setAnswers: Dispatch<SetStateAction<AnswersType[]>>;
}

type TemporalyAnswer = Record<number, string>;

export interface TemporalyAnswerType {
  setTemporalyAnswer: Dispatch<SetStateAction<TemporalyAnswer>>;
}

export interface BgInterface {
  background: string;
}
