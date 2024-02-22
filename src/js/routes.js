
import HomePage from '../pages/home.jsx';

import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: NotFoundPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
