import { DATA_QUESTIONS } from "../data/dataQuestions";
import { QuestionBoardStyled } from "../style/question-panel";

interface Questions {
  question: string;
  id: number;
  options: string[];
}

export function Questions() {
  return (
    <QuestionBoardStyled>
      {DATA_QUESTIONS.map(
        ({ question, id, options }: Questions) => (
          <div className="question" key={id}>
            <h3 key={id}>{question}</h3>

            {options.map((option, index) => (
              <label key={index} className="option-label">
                <input type="radio" value={option} name={`question-${id}`} />
                {option}
              </label>
            ))}
          </div>
        ),
      )}
    </QuestionBoardStyled>
  );
}
