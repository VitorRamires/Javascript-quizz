import { useContext } from "react";
import type { QuestionType } from "../types/types";
import { AnswerStorageContext } from "../utilities/context";

export function Question({
  answerOptions,
  questionDescription,
  questionID,
  correctAnswer,
}: QuestionType) {
  const { answers, isAnswered, saveAnswer } = useContext(AnswerStorageContext);

  function handleAnswerResult(
    selectedOption: number,
    actualQuestion: number,
    answerText: string,
  ) {
    const isCorrect = selectedOption === correctAnswer;
    saveAnswer(
      actualQuestion,
      selectedOption,
      isCorrect,
      answerText,
      questionDescription,
    );
  }

  const currentAnswer = answers[questionID];

  function getOptionClass(index: number): string {
    if (!isAnswered) return "";
    if (index === correctAnswer) return "option-correct";
    if (currentAnswer?.chosenOption === index) return "option-wrong";
    return "";
  }

  return (
    <>
      <h3>
        <span>Questão {questionID + 1}:</span>
        {questionDescription}
      </h3>
      {answerOptions.map((option, index) => (
        <label key={option} className={`option-label ${getOptionClass(index)}`}>
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
