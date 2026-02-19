import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { Status } from "./status";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);
  const { isAnswered, setIsAnswered } = useContext(AnswerStorageContext);
  const isFinished =
    (questionCounter?.questionCounter ?? 0) >= DATA_QUESTIONS.length;

  function handleQuestionProgression() {
    if (isFinished) {
      questionCounter?.setQuestionCounter(0);
      setIsAnswered(false);
      return;
    }

    if (!isAnswered) {
      setIsAnswered(true);
    } else {
      questionCounter?.setQuestionCounter((prev) => prev + 1);
      setIsAnswered(false);
      return;
    }
  }

  return (
    <MainPainelStyled>
      <h1>Javascript Quizz!</h1>
      {isFinished ? <Status /> : <Questions />}
      <button onClick={handleQuestionProgression}>
        {isFinished ? "Recomeçar" : isAnswered ? "Avançar" : "Responder"}
      </button>
    </MainPainelStyled>
  );
}
