import React from 'react';
import { Provider } from 'react-redux';

// Store
import FACTORY from '../api/factory';

// React Components/Container
import App from '../components/App.jsx';

export const AppContainer = () => {
  return (
    <Provider store={FACTORY.STORE}>
      <App />
    </Provider>
  );
};

export default AppContainer;
