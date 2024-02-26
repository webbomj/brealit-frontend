import React, { useEffect, useState } from 'react';

import {
  App,
  View,
  f7ready,
  useStore
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';


const MyApp = () => {

  // Framework7 Parameters
  const f7params = {
    name: 'My App', // App name
      theme: 'auto', // Automatic theme detection
      colors: {
        primary: '#007aff',
      },
      // App store
      store: store,
      // App routes
      routes: routes,
  };

  f7ready();


  return (
    <App { ...f7params }>
        {/* Your main view, should have "view-main" class */}
        <View className="safe-areas" reloadPages={true} url="/"  browserHistory={true} animate={true}/> 
    </App>
  )
}
export default MyApp;