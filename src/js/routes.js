
import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7';

var routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home',
    component: HomePage,
    name: 'home'
  }
];

export default routes;