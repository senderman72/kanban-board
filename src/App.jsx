import "./App.scss";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Board />
      </main>
    </div>
  );
}

export default App;
