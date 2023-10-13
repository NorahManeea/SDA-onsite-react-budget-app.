import React, { useState } from "react";
import BudgetPage from "./pages/BudgetPage";

// CSS File
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="formsContainer">
        <Routes>
          <Route path="/budget-app" element={<BudgetPage />} />
        </Routes>
        <BudgetPage />
      </div>
    </div>
  );
}

export default App;
