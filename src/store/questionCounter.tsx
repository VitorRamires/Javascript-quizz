import { createContext, useState } from "react";
import type { ReactNode } from "react";

const QuestionCounterContext = createContext<
  ReturnType<typeof useQuestionCounterState> | undefined
>(undefined);

function useQuestionCounterState() {
  const [questionCounter, setQuestionCounter] = useState(0);
  return { questionCounter, setQuestionCounter };
}

export function QuestionCounterProvider({ children }: { children: ReactNode }) {
  const value = useQuestionCounterState();

  return (
    <QuestionCounterContext.Provider value={value}>
      {children}
    </QuestionCounterContext.Provider>
  );
}

export { QuestionCounterContext };
