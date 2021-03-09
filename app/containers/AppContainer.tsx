import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

// Store
import { store } from 'API/data/store';

// React Components/Container
import App from '../App';

export const AppContainer: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
