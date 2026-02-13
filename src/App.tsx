import { View } from "./style/app";
import background from "./assets/yellow-bg.jpg";
import { MainPainel } from "./components/main-painel";

export interface BgInterface {
  background: string;
}

function App() {
  return (
    <View background={background}>
      <MainPainel />
    </View>
  );
}

export default App;
