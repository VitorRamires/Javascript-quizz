import { View } from "./style/app";
import background from "./assets/yellow-bg.jpg";
import { MainPainel } from "./components/main-painel";
import { QuestionCounterProvider } from "./store/questionCounter";

export interface BgInterface {
  background: string;
}

function App() {
  return (
    <View background={background}>
      <QuestionCounterProvider>
        <MainPainel />
      </QuestionCounterProvider>
    </View>
  );
}

export default App;
