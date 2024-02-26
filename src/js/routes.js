
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login.jsx';

import NotFoundPage from '../pages/404.jsx';
import StartPage from '../pages/start.jsx';

var routes = [
  {
    path: '/',
    component: StartPage,
  },
  {
    path: '/home/',
    component: HomePage,
    beforeEnter: function ({app, router, reject, resolve}) {
      console.log('before /')
      const me = app.store.getters.me.value
      if (me) {
        console.log('before Enter resolve')
        resolve()
      } else {
        console.log('before Enter reject')
        reject();
      }
    },
  },
  {
    path: '/login/',
    component: LoginPage,
    beforeEnter: function ({app, router, reject, resolve}) {
      const me = app.store.getters.me.value
      console.log('before /login/', me)

      if (me) {
        console.log('before Enter login reject')
        reject()
      } else {
        console.log('before Enter login resolve')
        resolve()
      }
      
    },
  },
  
  {
    path: '(.*)',
    component: NotFoundPage,
    
  },
  
  
];

export default routes;
