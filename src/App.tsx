import "./App.css";
import header from "./components/header";
import leftMenu from "./components/leftmenu";
import main from "./components/main";

function App(): JSX.Element {
  return (
    <div className="app">
   <header/>
    <leftMenu/>
    <main/>
    </div>
  );
}

export default App;
