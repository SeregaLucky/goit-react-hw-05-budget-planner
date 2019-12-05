/* import - node_modules */
import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

/*
 * COMPONENT
 */
const Input = ({
  type = ' text',
  value = '',
  onChange = () => null,
  name = '',
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

Input.defaultProps = {
  value: null,
  name: '',
};

Input.propTypes = {
  type: T.string.isRequired,
  value: T.oneOfType([T.string, T.number]),
  onChange: T.func.isRequired,
  name: T.string,
};

export default Input;
