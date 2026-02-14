import { useContext } from "react";
import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionCounterContext } from "../store/questionCounter";
import { QuestionBoardStyled, Question } from "../style/question-panel";
import { AnswerStorageContext } from "../store/answerStorage";

interface Questions {
  question: string;
  id: number;
  options: string[];
}

export function Questions() {
  const questionCounter = useContext(QuestionCounterContext);
  const answers = useContext(AnswerStorageContext)

  // ao clicar na opçao, adicionar a resposta e verificar se está correta 

  return (
    <QuestionBoardStyled>
      {DATA_QUESTIONS.map(({ question, id, options }: Questions) => (
        <Question
          key={id}
          className={questionCounter?.questionCounter === id ? "question-active" : "question-desactive"}
        >
          <h3 key={id}>{question}</h3>
          {options.map((option, index) => (
            <label key={index} className="option-label">
              <input type="radio" value={option} name={`question-${id}`} />
              {option}
            </label>
          ))}
        </Question>
      ))}
    </QuestionBoardStyled>
  );
}
