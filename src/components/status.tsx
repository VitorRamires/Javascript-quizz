import { useContext } from "react";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { StatisticStyled } from "../style/statistic";

export function Status() {
  const { answers } = useContext(AnswerStorageContext);

  const myAnswers = Object.values(answers);

  const correctAnswers = myAnswers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = myAnswers.filter((answer) => !answer.isCorrect).length;
  const skipped = myAnswers.filter((answer) => answer.skipped).length;

  const percentCorrectAnswers = (100 * correctAnswers) / DATA_QUESTIONS.length;
  const percentWrongAnwsers = (100 * wrongAnswers) / DATA_QUESTIONS.length;
  const percentSkipped = (100 * skipped) / DATA_QUESTIONS.length;

  return (
    <StatisticStyled>
      <h2>QUIZZ COMPLETED!</h2>
      <div className="statistic-header">
        <h3 className="correct">Questões corretas: {percentCorrectAnswers}%</h3>
        <h3 className="incorrect">Questões erradas: {percentWrongAnwsers}%</h3>
        <h3 className="skipped">Questões puladas: {percentSkipped}%</h3>
      </div>
      {myAnswers.map((question) => (
        <div className="log" key={question.question}>
          <p>{question.questionDescription}</p>

          <p className={question.isCorrect ? "correct" : "incorrect"}>
            {question.answerText}
          </p>
          {question.skipped ? <h4>Não respondida</h4> : ""}
        </div>
      ))}
    </StatisticStyled>
  );
}
