import React, { useEffect, useState } from "react";

//addSaving : (a:number)=> void
import { TransferProp } from "../types/types";
import { Button } from "@mui/material";

export default function Transfer(prop: TransferProp) {
  // Use State
  const [transferAmount, setTransferAmount] = useState(0);

  const handleTransferAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTransferAmount = Number(e.target.value);
    setTransferAmount(newTransferAmount);
  };

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    // Check Current Balance
    if (prop.currentBalance >= transferAmount) {
      // Update the currentSaving state in the Target component
      prop.setCurrentSaving(transferAmount);
      setTransferAmount(0); // Reset the transfer input
      prop.updateCurrentSaving(transferAmount);
      prop.updateBalance(transferAmount, -1);
    } else {
      console.log("You don't have enough money!");
    }
  };
  return (
    <div>
      <form>
        <p>
          Current Balance: <span>{prop.currentBalance}</span>
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
