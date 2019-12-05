/* import - node_modules */
import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

/*
 * COMPONENT
 */
const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: T.node.isRequired,
  customStyles: T.string.isRequired,
};

export default Label;
