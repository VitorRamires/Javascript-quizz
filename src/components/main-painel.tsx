import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { Status } from "./status";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);
  const { isAnswered, setIsAnswered, saveAnswer, answers } = useContext(AnswerStorageContext);
  const currentQuestion = questionCounter?.questionCounter ?? 0;
  const isFinished = currentQuestion >= DATA_QUESTIONS.length;

  function saveSkippedAnswer() {
    const { questionDescription, answerOptions, correctAnswer } = DATA_QUESTIONS[currentQuestion];
    if (!answers[currentQuestion]) {
      saveAnswer(currentQuestion, -1, false, answerOptions[correctAnswer], questionDescription, true);
    }
  }

  function handleAnswer() {
    saveSkippedAnswer();
    setIsAnswered(true);
  }

  function handleAdvance() {
    questionCounter?.setQuestionCounter((prev) => prev + 1);
    setIsAnswered(false);
  }

  function handleRestart() {
    questionCounter?.setQuestionCounter(0);
    setIsAnswered(false);
  }

  function handleButtonClick() {
    if (isFinished) return handleRestart();
    if (isAnswered) return handleAdvance();
    handleAnswer();
  }

  return (
    <MainPainelStyled>
      <h1>Javascript Quizz!</h1>
      {isFinished ? (
        <Status />
      ) : (
        <Questions onTimeout={handleAnswer} />
      )}
      <button onClick={handleButtonClick}>
        {isFinished ? "Recomeçar" : isAnswered ? "Avançar" : "Responder"}
      </button>
    </MainPainelStyled>
  );
}