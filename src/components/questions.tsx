import { useContext } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, QuestionStyled } from "../style/question-panel";
import { Question } from "./question";

export function Questions() {
  const questionCounter = useContext(QuestionCounterContext);
  const { questionID, questionDescription, answerOptions, correctAnswer } =
    DATA_QUESTIONS[questionCounter?.questionCounter ?? 0];

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
      </QuestionStyled>
    </QuestionBoardStyled>
  );
}
