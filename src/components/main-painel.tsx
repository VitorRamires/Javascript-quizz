import { useContext } from "react";
import { QuestionCounterContext } from "../store/questionCounter";
import { MainPainelStyled } from "../style/question-panel";
import { Questions } from "./questions";
import { AnswerStorageContext } from "../utilities/context";

export function MainPainel() {
  const questionCounter = useContext(QuestionCounterContext);
  const { answers, setIsCorrect, isCorrect } = useContext(AnswerStorageContext);

  function handleQuestionProgression() {
    console.log(answers);
    const currentQuestion = questionCounter?.questionCounter;

    if (currentQuestion !== undefined) {
      const currentAnswer = answers[currentQuestion];
      setIsCorrect(currentAnswer.isCorrect);
      console.log(isCorrect)

    }

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
