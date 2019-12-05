const getbudget = state => state.planner.budget;
const getExpenses = state => state.planner.expenses;

const calculateTotalExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = state => {
  const budget = getbudget(state);
  const totalExpenses = calculateTotalExpenses(state);
  return budget - totalExpenses;
};

export default {
  getbudget,
  getExpenses,
  calculateTotalExpenses,
  calculateBalance,
};
