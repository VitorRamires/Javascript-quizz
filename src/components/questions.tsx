import { useContext, useEffect } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, QuestionStyled } from "../style/question-panel";
import { Question } from "./question";

export function Questions({ onTimeout }: { onTimeout: () => void }) {
  const questionCounter = useContext(QuestionCounterContext);
  const { questionID, questionDescription, answerOptions, correctAnswer } =
    DATA_QUESTIONS[questionCounter?.questionCounter ?? 0];

  useEffect(() => {
    const timeout = setTimeout(onTimeout, 15000);
    return () => clearTimeout(timeout);
  }, [questionCounter?.questionCounter, onTimeout]);

  return (
    <QuestionBoardStyled>
      <QuestionStyled
        key={questionID}
        className={
          questionCounter?.questionCounter === questionID
            ? "question-active"
            : "question-desactive"
        }
      >
        <Question
          questionDescription={questionDescription}
          questionID={questionID}
          answerOptions={answerOptions}
          correctAnswer={correctAnswer}
        />
        <progress value={0} max={15}></progress>
      </QuestionStyled>
    </QuestionBoardStyled>
  );
}
