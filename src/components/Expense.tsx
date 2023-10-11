import React, { useState } from "react";

type Expense = {
  expense: string;
  amount: number;
  date: string;
};
export default function Expense() {
  // UseState
  const [expenseInputs, setExpenseInputs] = useState({
    expense: "",
    amount: 0,
    date: "",
  });
  const [expenseList, setExpenseList] = useState<Expense[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (expenseInputs.amount >= 0) {
      const newExpense: Expense = {
        expense: expenseInputs.expense,
        amount: expenseInputs.amount,
        date: expenseInputs.date,
      };

      setExpenseList([...expenseList, newExpense]);

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
    </div>
  );
}
