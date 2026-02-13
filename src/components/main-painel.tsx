import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";

export function MainPainel() {
  return (
    <MainPainelStyled>
      <h2>Javascript Quizz!</h2>
      <Questions />
      <button>Responder</button>
    </MainPainelStyled>
  );
}
