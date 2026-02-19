import { useContext } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, QuestionStyled } from "../style/question-panel";
import type { QuestionType } from "../types/types";
import { Question } from "./question";

export function Questions() {
  const questionCounter = useContext(QuestionCounterContext);

  return (
    <QuestionBoardStyled>
      {DATA_QUESTIONS.map(
        ({
          questionDescription,
          questionID,
          answerOptions,
          correctAnswer,
        }: QuestionType) => (
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
        ),
      )}
    </QuestionBoardStyled>
  );
}
