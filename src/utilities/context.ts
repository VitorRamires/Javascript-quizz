import { createContext } from "react";
import type { AnswerStorageContextType } from "../types/types";

export const AnswerStorageContext = createContext<AnswerStorageContextType>({
  answers: {},
  isAnswered: false,
  setIsAnswered: () => {},
  saveAnswer: () => {},
});