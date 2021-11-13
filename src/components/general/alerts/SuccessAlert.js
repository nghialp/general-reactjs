import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SuccessAlert = (props) => (
  <Alert variant="success">
    <h4>
      <FontAwesomeIcon icon={faCheck} />
    </h4>
    {props.children}
  </Alert>
);

SuccessAlert.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default SuccessAlert;
