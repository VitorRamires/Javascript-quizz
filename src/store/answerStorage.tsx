import { createContext, useState } from "react";
import type { ReactNode } from "react";

export const AnswerStorageContext = createContext({});

export function AnswerStorageProvider({ children }: { children: ReactNode }) {
  const [awnser, setAnswer] = useState({});
  const value = { awnser, setAnswer };

  return (
    <AnswerStorageContext.Provider value={value}>
      {children}
    </AnswerStorageContext.Provider>
  );
}
