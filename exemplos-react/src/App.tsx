import logo from "./logo.svg";
import "./App.css";
import { BotaoEnviar } from "./buttons";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Exemplo de projetos feitos em React</p>
      </header> */}
      <BotaoEnviar />
    </div>
  );
}

export default App;
