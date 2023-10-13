import React, { useState } from "react";

import { TargetProp } from "../types/types";
import { Button } from "@mui/material";

export default function Target(prop: TargetProp) {
  // UseStates
  const [targetInputs, setTargetInputs] = useState({
    target: 0,
  });

  const handleButtonClicked = () => {
    setTargetInputs({ target: 0 });
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTarget = Number(e.target.value);
    setTargetInputs({ ...targetInputs, target: newTarget });
  };
  let progress =
    targetInputs.target > 0
      ? (prop.currentSaving / targetInputs.target) * 100
      : 0;
  //const progress = ;
  return (
    <div className="targetForm form">
      <form>
        <label htmlFor="target">Set Target:</label>
        <input
          type="number"
          placeholder="Salary"
          id="target"
          value={targetInputs.target}
          onChange={handleTargetChange}
        />
        <p>
          Current Saving: <span>{prop.currentSaving}</span>
        </p>
        <p>Target: {targetInputs.target}</p>
        <div>
          <p>
            Progress: <span>{progress}%</span>
          </p>
          <progress
            value={prop.currentSaving}
            max={Number(targetInputs)}
          ></progress>
        </div>
        <button aria-label="reset" onClick={handleButtonClicked}>
          Reset
        </button>
      </form>
    </div>
  );
}
