import { useContext } from "react";
import {
  QuestionCounterContext,
} from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);

  function handleQuestionProgression() {
    questionCounter?.setQuestionCounter((prevQuestion) => prevQuestion + 1);
  }

  return (
    <MainPainelStyled>
      <h2>Javascript Quizz!</h2>
      <Questions />
      <button onClick={handleQuestionProgression}>Responder</button>
    </MainPainelStyled>
  );
}
