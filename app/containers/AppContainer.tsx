import { fetchStart } from 'API/data/plex-library/actions';
// Store
import { store } from 'API/data/store';
// React Components/Container
import App from 'Components/App';
import React, { FunctionComponent, useEffect } from 'react';
import { Provider } from 'react-redux';

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
