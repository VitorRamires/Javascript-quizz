import { useState } from "react";
import type { ReactNode } from "react";
import { AnswerStorageContext } from "../utilities/context";

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [awnsers, setAnswers] = useState([{}]);
  const [temporalyAwnser, setTemporalyAnswer] = useState([{}]);

  const value = { awnsers, setAnswers, temporalyAwnser, setTemporalyAnswer };

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
