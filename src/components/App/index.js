import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import Route from '../Route';
import Routes from '../../routes';
import config from '../../config';

const App = () => {
  const routers = useRoutes(Routes.map(({
    path,
    secure,
    isAdmin,
    component: Component,
    ...rest
  }) => {
    const isAuthenticated = (window.authSessionService && window.authSessionService.isAuthenticated()) || !secure;
    return isAuthenticated ? {
      path,
      element: <Component {...rest} />,
    } : {
      path,
      element: <Navigate
        to={isAdmin ? config.routePaths.admin.login : config.routePaths.login}
        state={{ from: path }}
      />,
    };
  }));
  return routers;
};

export default App;
