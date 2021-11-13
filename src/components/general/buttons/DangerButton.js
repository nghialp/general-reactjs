import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const DangerButton = (props) => {
  const { children, isFullWidth, ...rest } = props;
  return (
    <div className={isFullWidth && 'd-grid gap-2'}>
      <Button variant="danger" {...rest}>
        {props.children}
      </Button>
    </div>

  );
};

DangerButton.propTypes = {
  /** DOM children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isFullWidth: PropTypes.bool,
};

export default DangerButton;
