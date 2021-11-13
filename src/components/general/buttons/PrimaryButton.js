import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PrimaryButton = (props) => {
  const { children, isFullWidth, ...rest } = props;
  return (
    <div className={isFullWidth && 'd-grid gap-2'}>
      <Button variant="primary" {...rest}>
        {props.children}
      </Button>
    </div>

  );
};

PrimaryButton.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isFullWidth: PropTypes.bool,
};

export default PrimaryButton;
