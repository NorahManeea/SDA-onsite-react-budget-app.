import React, { useState } from "react";

import { ExpenseType, IncomeType } from "../types/types";
import Income from "../components/Income";
import Expense from "../components/Expense";
import Target from "../components/Target";
import Transfer from "../components/Transfer";


export default function BudgetPage() {
  const [incomeList, setIncomeList] = useState<IncomeType[]>([]);
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([]);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
 
  const updateBalance = (amount: number, calculation:number) => {
    if (calculation === -1) {
      setCurrentBalance(currentBalance - amount);
    } else if (calculation === 1) {
      setCurrentBalance(currentBalance + amount);
    }
  };

  const updateCurrentSaving = (amount:number) => {
    setCurrentSaving(currentSaving + amount);
  };
  return (
    <div>
       <Income incomeList={incomeList} setIncomeList={setIncomeList} updateBalance={updateBalance}/>
        <Expense expenseList={expenseList} setExpenseList={setExpenseList} updateBalance={updateBalance}/>
        <Target currentSaving={currentSaving} setCurrentSaving={setCurrentSaving}/>
        <Transfer incomeList={incomeList} expenseList={expenseList} currentSaving={currentSaving} currentBalance={currentBalance} setCurrentSaving={setCurrentSaving} updateCurrentSaving={updateCurrentSaving} updateBalance={updateBalance}/>
    </div>
  )
}
