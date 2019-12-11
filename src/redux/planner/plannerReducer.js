/* eslint-disable */
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as types from './plannerTypes';

// const budgetReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case types.SAVE_BUDGET:
//       return payload.value;

//     default:
//       return state;
//   }
// };

const budgetReducer = createReducer(0, {
  [types.SAVE_BUDGET]: (state, { payload }) => payload.value,
});

// const expensesReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_EXPENSE:
//       console.log(payload);
//       return [payload.expense, ...state];

//     case types.REMOVE_EXPENSE:
//       return state.filter(expense => expense.id !== payload.id);

//     default:
//       return state;
//   }
// };

const expensesReducer = createReducer([], {
  [types.ADD_EXPENSE]: (state, { payload }) => [payload.expense, ...state],

  [types.REMOVE_EXPENSE]: (state, { payload }) =>
    state.filter(expense => expense.id !== payload.id),
});

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
