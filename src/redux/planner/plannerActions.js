import shortid from 'shortid';
import * as types from './plannerTypes';

export const saveBudgetAC = value => ({
  type: types.SAVE_BUDGET,

  payload: {
    value,
  },
});

export const addExpenseAC = ({ name, amount }) => ({
  type: types.ADD_EXPENSE,

  payload: {
    expense: {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    },
  },
});

export const removeExpenseAC = id => ({
  type: types.REMOVE_EXPENSE,

  payload: {
    id,
  },
});
