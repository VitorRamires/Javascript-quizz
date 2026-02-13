import { DATA_QUESTIONS } from "../data/dataQuestions";

interface Questions {
  question: string;
  id: number;
  options: string[];
  questionIndicator: string;
}

export function Questions() {
  return (
    <div className="question_board">
      {DATA_QUESTIONS.map(
        ({ question, id, options, questionIndicator }: Questions) => (
          <div className="question" key={id}>
            <h3 key={id}>{question}</h3>

            {options.map((option) => (
              <label htmlFor={option}>
                {option}
                <input
                  type="radio"
                  id={option}
                  name={questionIndicator}
                  value={option}
                />
              </label>
            ))}
          </div>
        ),
      )}
    </div>
  );
}
