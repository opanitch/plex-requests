// React
import React from 'react';
// Redux
import { Provider } from 'react-redux';

// Store
import { builtStore } from '../api/api';

// React Components/Container
import App from '../components/App.jsx';

export const AppContainer = () => {
  return (
    <Provider store={builtStore}>
      <App />
    </Provider>
  );
};

export default AppContainer;
