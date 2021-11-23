import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  FormGroup,
  FormControl,
  // FormCheck,
  // FormFloating,
  // FormSelect,
  FormLabel,
} from 'react-bootstrap';

// const isForCus = true;
const [isForCus, setForcus] = useState(false);

const FormField = (props) => {
  const {
    label,
    type,
    name,
    error,
    onChange,
    onBlur,
    ...rest
  } = props;
  // eslint-disable-next-line no-console
  console.log('error', error);
  return (
    <FormGroup className={classNames('input-group input-group-outline my-3', isForCus && 'focused is-focused')}>
      <FormLabel>{label}</FormLabel>
      <FormControl
        type={type}
        name={name}
        className
        onChange={onChange}
        onBlur={onBlur}
        onFocus={setForcus(true)}
        {...rest}
      />
    </FormGroup>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.object,
  type: PropTypes.oneOf([
    'checkbox',
    'datetime',
    'static',
    'text',
    'datetimerange',
    'password',
    'submit',
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,

};

export default FormField;
