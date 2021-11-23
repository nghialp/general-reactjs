import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form as DefaultForm,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormField from '../inputs/FormField';
import DangerButton from '../buttons/DangerButton';

const Form = ({
  formFields, onSubmit, defaultValues, validate, actionButtons,
}) => {
  const schema = yup.object({ ...validate }).required();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const submitting = (data) => {
    // eslint-disable-next-line no-console
    console.log('data-adsd', data);
    onSubmit(data);
  };

  useEffect(() => {
    formFields.forEach(({ fieldName }) => {
      register(fieldName);
    });
  }, []);

  const handleChange = (e, callback) => {
    const { value, name } = e.target;
    setValue(name, value);
    if (callback) {
      callback(e);
    }
  };

  return (
    <DefaultForm onSubmit={handleSubmit(submitting)} className="text-start">
      {formFields.map(({
        type,
        label,
        fieldName,
        onChange,
        ...rest
      }) => (
        <FormField
          {...rest}
          name={fieldName}
          type={type}
          label={label}
          key={fieldName}
          onChange={(e) => { handleChange(e, onChange); }}
          error={errors[fieldName]}
        />
      ))}
      <div className="action-button">
        {actionButtons || (
          <DangerButton
            type="submit"
            isFullWidth
          >
            Gửi

          </DangerButton>
        )}
      </div>
    </DefaultForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  formFields: PropTypes.array,
  defaultValues: PropTypes.object,
  validate: PropTypes.object,
  actionButtons: PropTypes.array,
};

export default Form;
