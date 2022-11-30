import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Dropdown from "./components/Dropdown/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  //state for dropdown
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="App">
      <Navbar toggleDropdown={setisOpen} />
      <main>
        <Sidebar />
        <Board />
      </main>
      <Dropdown dropdown={isOpen} toggleDropdown={setisOpen} />
    </div>
  );
}

export default App;
