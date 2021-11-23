import React from 'react';
import PropTypes from 'prop-types';
import {
  Route as DefaultRoute,
  Navigate,
} from 'react-router-dom';
import config from '../../config';

const Route = ({
  component: Component,
  path,
  secure,
  identity,
  isAdmin,
  ...rest
}) => {
  // eslint-disable-next-line no-console
  console.log('path-route', path);
  const isAuthenticated = (window.authSessionService && window.authSessionService.isAuthenticated()) || !secure;
  return (
    <>
      { isAuthenticated ? (
        <DefaultRoute
          path={path}
          element={<Component {...rest} />}
        />
      ) : (
        <DefaultRoute
          path={path}
          element={(
            <Navigate
              to={isAdmin ? config.routePaths.admin.login : config.routePaths.login}
              state={{ from: path }}
            />
          )}
        />
      )}
    </>
  );
};

Route.propTypes = {
  /** Whether or not the request to the route should be secured. */
  secure: PropTypes.bool,
  /** What url the user should be redirected to when logging in. */
  path: PropTypes.string,
  /** What url the user should be redirected to when logging out. */
  identity: PropTypes.object,
  /** Component to load on route. */
  isAdmin: PropTypes.bool,
  component: PropTypes.any,
};

export default Route;
