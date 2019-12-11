/* eslint-disable */
/* import - node_modules */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import T from 'prop-types';
import shortid from 'shortid';
/* import - CSS */
import '../App.css';
/* import - selectors */
import selectors from '../redux/planner/plannerSelectors';
/* import - action creator */
import * as AC from '../redux/planner/plannerActions';
/* import - COMPONENT */
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

/*
 * COMPONENT
 */
const App = ({
  expenses,
  budget,
  totalExpenses,
  balance,
  saveBudget,
  addExpense,
  removeExpense,
}) => {
  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expenses.length > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
    </Container>
  );
};

App.propTypes = {
  expenses: T.arrayOf(T.shape).isRequired,
  budget: T.oneOfType([T.number, T.string]).isRequired,
  totalExpenses: T.number.isRequired,
  balance: T.number.isRequired,

  saveBudget: T.func.isRequired,
  addExpense: T.func.isRequired,
  removeExpense: T.func.isRequired,
};

/*
 * CONNECT
 */
const mapStateToProps = state => ({
  expenses: selectors.getExpenses(state),
  budget: selectors.getbudget(state),
  totalExpenses: selectors.calculateTotalExpenses(state),
  balance: selectors.calculateBalance(state),
});

const mapDispatchToProps = dispatch => ({
  saveBudget: value => dispatch(AC.saveBudgetAC({ value })),
  addExpense: ({ name, amount }) =>
    dispatch(
      AC.addExpenseAC({
        expense: { id: shortid.generate(), name, amount: Number(amount) },
      }),
    ),
  removeExpense: id => dispatch(AC.removeExpenseAC({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//
//

/* OLD mapDispatchToProps */
// const mapDispatchToProps = dispatch => ({
//   // saveBudget: value => dispatch(AC.saveBudgetAC(value)),
//   saveBudget: value => dispatch(AC.saveBudgetAC({ value })),
//   // addExpense: (name, amount) => dispatch(AC.addExpenseAC(name, amount)),
//   addExpense: (name, amount) =>
//     dispatch(
//       AC.addExpenseAC({
//         expense: { id: shortid.generate(), name, amount: Number(amount) },
//       }),
//     ),
//   // removeExpense: id => dispatch(AC.removeExpenseAC(id)),
//   removeExpense: id => dispatch(AC.removeExpenseAC({ id })),
// });
