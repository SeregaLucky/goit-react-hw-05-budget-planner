/* import - node_modules */
import React from 'react';
import T from 'prop-types';

/*
 * COMPONENT
 */
const Notification = ({ text }) => <span>{text}</span>;

Notification.propTypes = {
  text: T.string.isRequired,
};

export default Notification;
