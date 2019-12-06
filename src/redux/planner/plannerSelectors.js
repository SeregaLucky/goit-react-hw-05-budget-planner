import { createSelector } from 'reselect';

const getbudget = state => state.planner.budget;
const getExpenses = state => state.planner.expenses;

const calculateTotalExpenses = createSelector([getExpenses], expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0),
);

const calculateBalance = createSelector(
  [getbudget, calculateTotalExpenses],
  (budget, totalExpenses) => budget - totalExpenses,
);

export default {
  getbudget,
  getExpenses,
  calculateTotalExpenses,
  calculateBalance,
};
