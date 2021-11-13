import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const InfoAlert = (props) => (
  <Alert variant="info">
    <h4>
      <FontAwesomeIcon icon={faInfo} />
    </h4>
    {props.children}
  </Alert>
);

InfoAlert.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default InfoAlert;
