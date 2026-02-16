import { useContext } from "react";
import type { QuestionType } from "../types/types";
import { AnswerStorageContext } from "../utilities/context";

export function Question({
  answerOptions,
  question,
  questionID,
  correctAnswer,
}: QuestionType) {
  const { setAnswers } = useContext(AnswerStorageContext);

  function handleAnswerResult(
    selectedOption: number,
    actualQuestion: number,
    questionDescription: string,
  ) {
    setAnswers((prev) => ({
      ...prev,
      [actualQuestion]: {
        choosedOption: selectedOption,
        isCorrect: selectedOption === correctAnswer ? true : false,
        question: questionDescription,
      },
    }));
  }

  return (
    <>
      <h3>{question}</h3>
      {answerOptions.map((option, index) => (
        <label key={index} className="option-label">
          <input
            onChange={() => handleAnswerResult(index, questionID, option)}
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
