import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const DangerAlert = (props) => (
  <Alert variant="danger">
    <span className="glyphicon glyphicon-remove" aria-hidden="true" />
    <h4>
      <FontAwesomeIcon icon={faBan} />
    </h4>
    {props.children}
  </Alert>
);

DangerAlert.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DangerAlert;
