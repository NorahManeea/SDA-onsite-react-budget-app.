import React, { useState } from "react";

type Income = {
  income: string;
  amount: number;
  date: string;
};
export default function Income() {
  // UseState
  const [incomeInputs, setIncomeInputs] = useState({
    income: "",
    incomeAmount: 0,
    date: "",
  });

  const [incomeList, setIncomeList] = useState<Income[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (incomeInputs.incomeAmount >= 0) {
      const newIncome: Income = {
        income: incomeInputs.income,
        amount: incomeInputs.incomeAmount,
        date: incomeInputs.date,
      };

      setIncomeList([...incomeList, newIncome]);

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

  return (
    <div className="form">
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
    </div>
  );
}
