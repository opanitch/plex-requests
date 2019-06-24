import React from 'react';
import { Provider } from 'react-redux';

// Store
import { STORE } from '../api/factory.js';

// React Components/Container
import App from '../components/App.jsx';

export const AppContainer = () => {
  return (
    <Provider store={STORE}>
      <App />
    </Provider>
  );
};

export default AppContainer;
