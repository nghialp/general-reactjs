import React from 'react';
import PropTypes from 'prop-types';
import {
  FormCheck,
  FormLabel,
} from 'react-bootstrap';

const CheckBoxField = (props) => {
  const {
    label,
    value,
    type,
    ...rest
  } = props;

  return (
    <>
      <FormCheck
        {...rest}
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />
      <FormLabel>{label}</FormLabel>
    </>

  );
};

CheckBoxField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  validate: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  type: PropTypes.string,
  inputComponentClass: PropTypes.any,
  subType: PropTypes.string,

};

export default CheckBoxField;
