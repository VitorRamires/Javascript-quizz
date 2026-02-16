import { useContext } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, QuestionStyled } from "../style/question-panel";
import type { QuestionType } from "../types/types";
import { Question } from "./question";
import { AnswerStorageContext } from "../utilities/context";

export function Questions() {
  const questionCounter = useContext(QuestionCounterContext);
   const { answers } = useContext(AnswerStorageContext);
   
   console.log(answers)

  return (
    <QuestionBoardStyled>
      {DATA_QUESTIONS.map(({ question, questionID, answerOptions, correctAnswer }: QuestionType) => (
        <QuestionStyled
          key={questionID}
          className={
            questionCounter?.questionCounter === questionID
              ? "question-active"
              : "question-desactive"
          }
        >
          <Question
            question={question}
            questionID={questionID}
            answerOptions={answerOptions}
            correctAnswer={correctAnswer}
          />
        </QuestionStyled>
      ))}
    </QuestionBoardStyled>
  );
}
