import React, { useEffect } from 'react';

import {
  f7ready,
  App,
  View,
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  useEffect(() => {
    store.dispatch('getReceptionDays');
  }, [])

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

  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
    </App>
  )
}
export default MyApp;