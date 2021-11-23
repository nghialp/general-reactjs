import config from './config';
// product page
import HomePage from './components/pages/products/HomePage';
import LoginPage from './components/pages/products/LoginPage';

// admin page
import DashBoard from './components/pages/admin/Dashboard';
import LoginAdmin from './components/pages/admin/LoginAdmin';

const Routes = [
  // products
  {
    path: config.routePaths.login,
    secure: false,
    isAdmin: false,
    component: LoginPage,
  },
  {
    path: config.routePaths.home,
    secure: true,
    isAdmin: false,
    component: HomePage,
  },
  // admin
  {
    path: config.routePaths.admin.login,
    secure: false,
    isAdmin: true,
    component: LoginAdmin,
  },
  {
    path: config.routePaths.admin.dashboard,
    secure: true,
    isAdmin: true,
    component: DashBoard,
  },
];

export default Routes;
