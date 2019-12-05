import { combineReducers } from 'redux';
import * as types from './plannerTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.SAVE_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [payload.expense, ...state];

    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
