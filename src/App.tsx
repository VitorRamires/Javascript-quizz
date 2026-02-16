import { View } from "./style/app";
import background from "./assets/yellow-bg.jpg";
import { MainPainel } from "./components/main-painel";
import { QuestionCounterProvider } from "./store/questionCounter";
import { AnswerStorageProvider } from "./store/answerStorage";

function App() {
  return (
    <View background={background}>
      <QuestionCounterProvider>
        <AnswerStorageProvider>
          <MainPainel />
        </AnswerStorageProvider>
      </QuestionCounterProvider>
    </View>
  );
}

export default App;
