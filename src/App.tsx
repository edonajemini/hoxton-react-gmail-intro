import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;