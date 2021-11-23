import React from 'react';
import * as yup from 'yup';
import Form from '../../../general/forms';

const LoginAdmin = () => {
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
    <main className="main-content  mt-0">
      <div className="page-header align-items-start min-vh-100">
        <span className="mask bg-gradient-dark opacity-6" />
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Đăng Nhập</h4>
                    <div className="row mt-3">
                      <div className="col-2 text-center ms-auto">
                        <a className="btn btn-link px-3">
                          <i className="fa fa-facebook text-white text-lg" />
                        </a>
                      </div>
                      <div className="col-2 text-center px-1">
                        <a className="btn btn-link px-3">
                          <i className="fa fa-github text-white text-lg" />
                        </a>
                      </div>
                      <div className="col-2 text-center me-auto">
                        <a className="btn btn-link px-3">
                          <i className="fa fa-google text-white text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Form
                    onSubmit={onSubmit}
                    formFields={formFields}
                    validate={validate}
                  />
                  <p className="mt-4 text-sm text-center">
                    Bạn chưa có mật khẩu?
                    <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Đăng Ký Ngay</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginAdmin;
