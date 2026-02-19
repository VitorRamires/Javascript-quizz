
import { MainPainel } from "./components/main-painel";
import { QuestionCounterProvider } from "./store/questionCounter";
import { AnswerStorageProvider } from "./store/answerStorage";

function App() {
  return (
    <>
      <QuestionCounterProvider>
        <AnswerStorageProvider>
          <MainPainel />
        </AnswerStorageProvider>
      </QuestionCounterProvider>
    </>
  );
}

export default App;
