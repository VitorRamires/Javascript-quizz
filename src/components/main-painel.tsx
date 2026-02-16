import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageContext } from "../utilities/context";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);
  const { answers } = useContext(AnswerStorageContext);

  console.log(answers);

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
