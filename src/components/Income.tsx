import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import { IncomeType, IncomeProp } from "../types/types";

export default function Income(prop: IncomeProp) {
  // UseState
  const [incomeInputs, setIncomeInputs] = useState({
    income: "",
    incomeAmount: 0,
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (incomeInputs.incomeAmount >= 0) {
      const newIncome: IncomeType = {
        income: incomeInputs.income,
        amount: incomeInputs.incomeAmount,
        date: incomeInputs.date,
      };

      prop.setIncomeList([...prop.incomeList, newIncome]);
      // Clear expenseInputs state
      setIncomeInputs({ income: "", incomeAmount: 0, date: "" });
    }
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIncome = e.target.value;
    setIncomeInputs({ ...incomeInputs, income: newIncome });
  };

  const handleIncomeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setIncomeInputs({ ...incomeInputs, incomeAmount: newAmount });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setIncomeInputs({ ...incomeInputs, date: newDate });
  };
  const handleDeleteIncome = (index: number) => {
    const updatedIncomeList = [...prop.incomeList];
    updatedIncomeList.splice(index, 1);
    prop.setIncomeList(updatedIncomeList);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="income-source">Income Source:</label>
        <input
          type="number"
          placeholder="Salary"
          id="income-source"
          value={incomeInputs.income}
          onChange={handleIncomeChange}
        />
        <label htmlFor="income-amount">Amount of Income:</label>
        <input
          type="number"
          id="income-amount"
          value={incomeInputs.incomeAmount}
          onChange={handleIncomeAmountChange}
        />
        <label htmlFor="income-date">Date:</label>
        <input
          type="date"
          id="income-date"
          value={incomeInputs.date}
          onChange={handleDateChange}
        />
        <button aria-label="add-income">Add Income</button>
      </form>
      <div className="list">
        <ul>
          <h4>Expense:</h4>
          {prop.incomeList.map((income, index) => (
            <li key={index}>
              Expense: {income.income}, Amount: {income.amount}, Date:
              {income.date}
              <button onClick={() => handleDeleteIncome(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
