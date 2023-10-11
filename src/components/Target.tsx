import React, { useState } from "react";

export default function Target() {
  // UseState
  const [targetInputs, setTargetInputs] = useState({
    target: 0,
    currentSaving: 0,
  });

  const handleButtonClicked = () => {
    setTargetInputs({ target: 0, currentSaving: 0 });
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTarget = Number(e.target.value);
    setTargetInputs({ ...targetInputs, target: newTarget });
  };
  const progress = 0;
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
          Current Saving: <span>{targetInputs.currentSaving}</span>
        </p>
        <p>Target: {targetInputs.target}</p>
        <div>
          <p>
            Progress: <span>{progress}%</span>
          </p>
          <progress value="0" max="100"></progress>
        </div>
        <button aria-label="reset" onClick={handleButtonClicked}>
          Reset
        </button>
      </form>
    </div>
  );
}
