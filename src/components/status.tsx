import { useContext } from "react";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { StatisticStyled } from "../style/statistic";

export function Status() {
  const { answers } = useContext(AnswerStorageContext);

  const myAnswers = Object.values(answers);
  const correctAnswers = myAnswers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = myAnswers.filter((answer) => !answer.isCorrect).length;

  const percentCorrectAnswers = (100 * correctAnswers) / DATA_QUESTIONS.length;
  const percentWrongAnwers = (100 * wrongAnswers) / DATA_QUESTIONS.length;

  console.log(answers);

  return (
    <StatisticStyled>
      <h2>QUIZZ COMPLETED!</h2>
      <div className="statistic-header">
        <h3 className="correct">Questões corretas: {percentCorrectAnswers}%</h3>
        <h3 className="incorrect">Questões erradas: {percentWrongAnwers}%</h3>
      </div>
      {myAnswers.map((question) => (
        <div className="log">
          <p>{question.questionDescription}</p>
          <p className={question.isCorrect ? "correct" : "incorrect"}>
            {question.answerText}
          </p>
        </div>
      ))}
    </StatisticStyled>
  );
}
