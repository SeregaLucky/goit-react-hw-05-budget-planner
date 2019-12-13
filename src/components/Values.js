/* import - node_modules */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import T from 'prop-types';
/* import - selectors */
import selectors from '../redux/planner/plannerSelectors';
/* import - COMPONENT */
import Stat from './Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

/*
 * COMPONENT
 */
const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: T.oneOfType([T.number, T.string]).isRequired,
  expenses: T.number.isRequired,
  balance: T.number.isRequired,
};

/*
 * CONNECT
 */
const mapStateToProps = state => ({
  expenses: selectors.calculateTotalExpenses(state),
  budget: selectors.getbudget(state),
  balance: selectors.calculateBalance(state),
});

export default connect(mapStateToProps)(Values);
