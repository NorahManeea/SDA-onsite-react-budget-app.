import React, { useEffect, useState } from "react";

//addSaving : (a:number)=> void
import { TransferProp } from "../types/types";
import { Button } from "@mui/material";

export default function Transfer(prop: TransferProp) {
  // Use State
  const [transferAmount, setTransferAmount] = useState(0);

  const totalIncome = prop.incomeList.reduce(
    (total, income) => total + income.amount,
    0
  );
  const totalExpense = prop.expenseList.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  let balance = totalIncome - totalExpense;

  const handleTransferAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTransferAmount = Number(e.target.value);
    setTransferAmount(newTransferAmount);
  };

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    // Check Current Balance
    if (balance >= transferAmount) {
      // Update the currentSaving state in the Target component
      prop.setCurrentSaving(transferAmount);
      setTransferAmount(0); // Reset the transfer input
    } else {
      console.log("You don't have enoough money!");
    }
  };
  return (
    <div>
      <form>
        <p>
          Current Balance: <span>{balance}</span>
        </p>
        <label htmlFor="target">Transfer to saving account:</label>
        <input
          type="number"
          placeholder=""
          id="target"
          value={transferAmount}
          onChange={handleTransferAmountChange}
        />
        <button aria-label="transfer" onClick={handleTransfer}>
          Transfer
        </button>
      </form>
    </div>
  );
}
