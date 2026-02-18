import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageContext } from "../utilities/context";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { Status } from "./Status";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);
  const { isAnswered, setIsAnswered } = useContext(AnswerStorageContext);

  function handleQuestionProgression() {
    if (!isAnswered) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
      questionCounter?.setQuestionCounter((prev) => prev + 1);
    }
  }

  const isFinished = (questionCounter?.questionCounter ?? 0) >= DATA_QUESTIONS.length;

  return (
    <MainPainelStyled>
      <h2>Javascript Quizz!</h2>
      {isFinished ? <Status /> : <Questions />}
      <button onClick={handleQuestionProgression}>
        {isAnswered ? "Avançar" : "Responder"}
      </button>
    </MainPainelStyled>
  );
}
