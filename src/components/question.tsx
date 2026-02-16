import { useContext } from "react";
import type { QuestionType } from "../types/types";
import { AnswerStorageContext } from "../utilities/context";

export function Question({
  answerOptions,
  questionDescription,
  questionID,
  correctAnswer,
}: QuestionType) {
  const { setAnswers } = useContext(AnswerStorageContext);

  function handleAnswerResult(selectedOption: number, actualQuestion: number) {
    setAnswers((prev) => ({
      ...prev,
      [actualQuestion]: {
        choosedOption: selectedOption,
        isCorrect: selectedOption === correctAnswer ? true : false,
        question: actualQuestion,
      },
    }));
  }

  return (
    <>
      <h3>{questionDescription}</h3>
      {answerOptions.map((option, index) => (
        <label
          key={index}
          className={`option-label`}
        >
          <input
            onChange={() => handleAnswerResult(index, questionID)}
            type="radio"
            value={option}
            name={`question-${questionID}`}
          />
          {option}
        </label>
      ))}
    </>
  );
}
