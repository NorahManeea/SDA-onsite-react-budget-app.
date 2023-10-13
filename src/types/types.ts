export type ExpenseType = {
  expense: string;
  amount: number;
  date: string;
};

export type IncomeType = {
  income: string;
  amount: number;
  date: string;
  
};

export type ExpenseProp = {
  expenseList: ExpenseType[];
  setExpenseList: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
};

export type IncomeProp = {
  incomeList: IncomeType[];
  setIncomeList: React.Dispatch<React.SetStateAction<IncomeType[]>>;
};

export type TargetProp = {
  currentSaving: number;
  setCurrentSaving: React.Dispatch<React.SetStateAction<number>>;
};

export type TransferProp = {
  incomeList: IncomeType[];
  expenseList: ExpenseType[];
  currentSaving: number;
  setCurrentSaving: React.Dispatch<React.SetStateAction<number>>;
};
