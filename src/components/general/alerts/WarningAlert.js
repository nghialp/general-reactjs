import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const WarningAlert = (props) => (
  <Alert variant="warning">
    <h4>
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </h4>
    {props.children}
  </Alert>
);

WarningAlert.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default WarningAlert;
