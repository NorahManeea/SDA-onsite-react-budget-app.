import React from "react";
// CSS File
import "./App.css";
// Components
import Income from "./components/Income";
import Expense from "./components/Expense";
import Target from "./components/Target";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <div className="formsContainer">
        <Income />
        <Expense />
        <Target />
      </div>
    </div>
  );
}

export default App;
