/* import - node_modules */
import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;

  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
`;

/*
 * COMPONENT
 */
const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  type: null,
  label: '',
  onClick: null,
};

Button.propTypes = {
  type: T.string,
  label: T.string,
  onClick: T.func,
};

export default Button;
