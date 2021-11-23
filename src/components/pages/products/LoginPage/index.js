import React from 'react';
import * as yup from 'yup';
import Form from '../../../general/forms';

const LoginPage = () => {
  const onSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log('on-submit', values);
  };

  const formFields = [
    {
      label: 'Email',
      type: 'text',
      fieldName: 'email',
    },
    {
      label: 'Mật Khẩu',
      type: 'password',
      fieldName: 'password',
    },
  ];
  const validate = {
    email: yup.string().required(),
    password: yup.string().required(),
  };

  return (
    <Form
      onSubmit={onSubmit}
      formFields={formFields}
      validate={validate}
    />
  );
};

export default LoginPage;
