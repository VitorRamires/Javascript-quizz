import { useContext } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, Question } from "../style/question-panel";
import { AnswerStorageContext } from "../utilities/context";
import type { QuestionType, TemporalyAnswerType } from "../types/types";

export function Questions() {
  const questionCounter = useContext(QuestionCounterContext);

  const { setTemporalyAnswer, temporalyAwnser } =
    useContext(AnswerStorageContext) as TemporalyAnswerType;

  function handleAnswerResult(questionID: number, selectedAnwser: string) {
    setTemporalyAnswer({ [questionID]: selectedAnwser });
  }

  console.log(temporalyAwnser);

  return (
    <QuestionBoardStyled>
      {DATA_QUESTIONS.map(({ question, id, options }: QuestionType) => (
        <Question
          key={id}
          className={
            questionCounter?.questionCounter === id
              ? "question-active"
              : "question-desactive"
          }
        >
          <h3 key={id}>{question}</h3>
          {options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                onChange={() => {
                  handleAnswerResult(id, option);
                }}
                type="radio"
                value={option}
                name={`question-${id}`}
              />
              {option}
            </label>
          ))}
        </Question>
      ))}
    </QuestionBoardStyled>
  );
}
