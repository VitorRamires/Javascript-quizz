import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageProvider } from "../store/answerStorage";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);

  function handleQuestionProgression() {
    questionCounter?.setQuestionCounter((prevQuestion) => prevQuestion + 1);
  }

  return (
    <MainPainelStyled>
      <AnswerStorageProvider>
        <h2>Javascript Quizz!</h2>
        <Questions />
        <button onClick={handleQuestionProgression}>Responder</button>
      </AnswerStorageProvider>
    </MainPainelStyled>
  );
}
