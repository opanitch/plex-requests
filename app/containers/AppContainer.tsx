import { Status } from 'API/rest/actions/actions.interface';
import { useAuthenticate } from 'API/rest/actions/authenticate/authenticate.actions';
import App from 'Components/App';
import React, { FunctionComponent, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export const AppContainer: FunctionComponent = () => {
  const { authenticate, status: authStatus } = useAuthenticate();

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <>
      <Header />
      {authStatus !== Status.SUCCESS ? <>Loading</> : <App />}
      <Footer />
    </>
  );
};

export default AppContainer;
