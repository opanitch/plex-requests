import { fetchStart } from 'API/data/plex-library/actions';
// Store
import { store } from 'API/data/store';
import React, { FunctionComponent, useEffect } from 'react';
import { Provider } from 'react-redux';
// React Components/Container
import App from '../App';

export const AppContainer: FunctionComponent = () => {
  useEffect(() => {
    store.dispatch(fetchStart());
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
