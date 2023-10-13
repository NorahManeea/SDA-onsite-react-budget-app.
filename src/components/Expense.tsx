import React, { useState } from "react";

import { ExpenseType, ExpenseProp } from "../types/types";
import { Box, Button, Typography } from "@mui/material";

export default function Expense(prop: ExpenseProp) {
  // UseState
  const [expenseInputs, setExpenseInputs] = useState({
    expense: "",
    amount: 0,
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (expenseInputs.amount >= 0) {
      const newExpense: ExpenseType = {
        expense: expenseInputs.expense,
        amount: expenseInputs.amount,
        date: expenseInputs.date,
      };

      prop.setExpenseList([...prop.expenseList, newExpense]);

      // Clear expenseInputs state
      setExpenseInputs({ expense: "", amount: 0, date: "" });
    }
  };

  const handleExpenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newExpense = e.target.value;
    setExpenseInputs({ ...expenseInputs, expense: newExpense });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setExpenseInputs({ ...expenseInputs, amount: newAmount });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setExpenseInputs({ ...expenseInputs, date: newDate });
  };

  const handleDeleteExpense = (index: number) => {
    const updatedExpenseList = [...prop.expenseList];
    updatedExpenseList.splice(index, 1);
    prop.setExpenseList(updatedExpenseList);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="expense-source">Expense Source:</label>
        <input
          type="text"
          placeholder="Bill"
          id="expense-source"
          value={expenseInputs.expense}
          onChange={handleExpenseChange}
          required
        />
        <label htmlFor="expense-amount">Amount of Expense:</label>
        <input
          type="number"
          id="expense-amount"
          value={expenseInputs.amount}
          onChange={handleAmountChange}
          required
        />
        <label htmlFor="expense-date">Date of Expense:</label>
        <input
          type="date"
          id="expense-date"
          value={expenseInputs.date}
          onChange={handleDateChange}
          required
        />
        <button aria-label="add-expense">Add Expense</button>
      </form>
      <div className="list">
        <ul>
          <h4>Expense:</h4>
          {prop.expenseList.map((expense, index) => (
            <li key={index}>
              Expense: {expense.expense}, Amount: {expense.amount}, Date:
              {expense.date}
              <button onClick={() => handleDeleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
