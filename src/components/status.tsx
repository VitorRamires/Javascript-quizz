import { useContext } from "react";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";

export function Status() {
  const { answers } = useContext(AnswerStorageContext);

  const myAnswers = Object.values(answers);
  const correctAnswers = myAnswers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = myAnswers.filter((answer) => !answer.isCorrect).length;

  const percentCorrectAnswers = (100 * correctAnswers) / DATA_QUESTIONS.length;
  const percentWrongAnwers = (100 * wrongAnswers) / DATA_QUESTIONS.length;

  console.log(answers);

  return (
    <div className="stats">
      <h2>QUIZZ COMPLETED!</h2>
      <p>Questões corretas: {percentCorrectAnswers}%</p>
      <p>Questões erradas: {percentWrongAnwers}%</p>
      {myAnswers.map((question) => (
        <div className="log">
          <p>{question.questionDescription}</p>
          <p className={question.isCorrect ? "correct" : "incorrect"}>
            {question.answerText}
          </p>
        </div>
      ))}
    </div>
  );
}
