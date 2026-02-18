import { useContext } from "react";
import type { QuestionType } from "../types/types";
import { AnswerStorageContext } from "../utilities/context";

export function Question({
  answerOptions,
  questionDescription,
  questionID,
  correctAnswer,
}: QuestionType) {
  const { answers, setAnswers, isAnswered } = useContext(AnswerStorageContext);

  function handleAnswerResult(
    selectedOption: number,
    actualQuestion: number,
    answerText: string,
  ) {
    setAnswers((prev) => ({
      ...prev,
      [actualQuestion]: {
        choosedOption: selectedOption,
        isCorrect: selectedOption === correctAnswer ? true : false,
        question: actualQuestion,
        answerText: answerText,
        questionDescription: questionDescription,
      },
    }));
  }

  const currentAnswer = answers[questionID];

  function getOptionClass(index: number): string {
    if (!isAnswered) return "";
    if (index === correctAnswer) return "option-correct";
    if (currentAnswer?.choosedOption === index) return "option-wrong";
    return "";
  }

  return (
    <>
      <h3>{questionDescription}</h3>
      {answerOptions.map((option, index) => (
        <label key={index} className={`option-label ${getOptionClass(index)}`}>
          <input
            onChange={() => handleAnswerResult(index, questionID, option)}
            type="radio"
            value={option}
            name={`question-${questionID}`}
            disabled={isAnswered}
          />

          {option}
        </label>
      ))}
    </>
  );
}
