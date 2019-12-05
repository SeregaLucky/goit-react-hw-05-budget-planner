/* import - node_modules */
import React, { Component } from 'react';
import T from 'prop-types';
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
export default class BudgetForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };

  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSave } = this.props;

    onSave(this.state.budget);

    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
