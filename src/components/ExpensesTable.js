/* import - node_modules */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import T from 'prop-types';
/* import - selectors */
import selectors from '../redux/planner/plannerSelectors';
/* import - action creator */
import * as AC from '../redux/planner/plannerActions';
/* import - COMPONENT */
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

/*
 * COMPONENT
 */
const ExpensesTable = ({ items = [], onRemove }) =>
  items.length > 0 && (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => onRemove(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

ExpensesTable.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string,
      name: T.string,
      amount: T.number,
    }),
  ).isRequired,

  onRemove: T.func.isRequired,
};

/*
 * CONNECT
 */
const mapStateToProps = state => ({
  items: selectors.getExpenses(state),
});
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(AC.removeExpenseAC({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
