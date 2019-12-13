/* import - node_modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import shortid from 'shortid';
/* import - action creator */
import * as AC from '../redux/planner/plannerActions';
/* import - COMPONENT */
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

/*
 * COMPONENT
 */
class ExpenseForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };

  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSave } = this.props;

    onSave({
      ...this.state,
    });

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

/*
 * CONNECT
 */
const mapDispatchToProps = dispatch => ({
  onSave: ({ name, amount }) =>
    dispatch(
      AC.addExpenseAC({
        expense: { id: shortid.generate(), name, amount: Number(amount) },
      }),
    ),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
