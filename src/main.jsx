import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BoardContext from "./context/BoardContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoardContext>
      <App />
    </BoardContext>
  </React.StrictMode>
);
