/* import - node_modules */
import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const Container = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

const Label = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`;

const Value = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
`;

/*
 * COMPONENT
 */
const Stat = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Container>
);

Stat.defaultProps = {
  isPositive: null,
};

Stat.propTypes = {
  label: T.string.isRequired,
  value: T.oneOfType([T.string, T.number]).isRequired,
  isPositive: T.bool,
};

export default Stat;
