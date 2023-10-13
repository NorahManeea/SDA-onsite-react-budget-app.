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
  return (
    <div>
       <Income incomeList={incomeList} setIncomeList={setIncomeList}/>
        <Expense expenseList={expenseList} setExpenseList={setExpenseList}/>
        <Target currentSaving={currentSaving} setCurrentSaving={setCurrentSaving}/>
        <Transfer incomeList={incomeList} expenseList={expenseList} currentSaving={currentSaving} setCurrentSaving={setCurrentSaving}/>
    </div>
  )
}
