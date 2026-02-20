import { useContext, useEffect, useRef, useState } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, QuestionStyled } from "../style/question-panel";
import { Question } from "./question";
import { AnswerStorageContext } from "../utilities/context";

export function Questions({ onTimeout }: { onTimeout: () => void }) {
  const [timer, setTimer] = useState(0);

  const questionCounter = useContext(QuestionCounterContext);
  const { isAnswered } = useContext(AnswerStorageContext);
  const { questionID, questionDescription, answerOptions, correctAnswer } =
    DATA_QUESTIONS[questionCounter?.questionCounter ?? 0];
  const onTimeoutRef = useRef(onTimeout);

  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  useEffect(() => {
    if (isAnswered) return;

    const interval = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);

    const timeout = setTimeout(() => onTimeoutRef.current(), 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [questionCounter?.questionCounter, isAnswered]);

  
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
        <progress value={timer} max={15}></progress>
      </QuestionStyled>
    </QuestionBoardStyled>
  );
}
