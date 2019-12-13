/* import - node_modules */
import React from 'react';
import styled from 'styled-components';
/* import - CSS */
import '../App.css';
/* import - COMPONENT */
import BudgetForm from './BudgetForm';
import Values from './Values';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';

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
const App = () => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    <ExpensesTable />
  </Container>
);

export default App;
