import { MainPainelStyled } from "../style/main-painel";
import { Questions } from "./questions";

export function MainPainel() {
  return (
    <MainPainelStyled>
      <h2>Javascript Quizz!</h2>
      <Questions />
    </MainPainelStyled>
  );
}
