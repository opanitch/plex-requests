import { useAuthenticate } from 'API/rest/actions/authenticate/authenticate.actions';
import { useGetUsers } from 'API/rest/actions/users/users.actions';
import { FullWidthContainer, LibraryList } from 'Components';
import Footer from 'Containers/Footer/Footer';
import Header from 'Containers/Header/Header';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

export const App: FunctionComponent<DivType> = () => {
  const {
    authenticate,
    authentication,
    // serverMessage: authMsg,
    status: authStatus,
  } = useAuthenticate();

  const {
    getUsers,
    // serverMessage: userMsg,
    status: usersStatus,
    users,
  } = useGetUsers();

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    // console.log('Auth Update:');
    // console.log(authentication);
    // console.log(authMsg);
    // console.log(authStatus);
    if (authStatus === 'done') {
      getUsers();
    }
  }, [authentication, authStatus]);

  useEffect(() => {
    // console.log('Users Update:');
    // console.log(users);
    // console.log(userMsg);
    // console.log(usersStatus);
  }, [users, usersStatus]);

  return (
    <>
      <Header />
      <FullWidthContainer>
        {({ ChildContainer }) => (
          <ChildContainer>
            {/* <RequestList title="Request List" />
            <RequestForm title="Request Form" /> */}
            <LibraryList title="Plex List" />
            {/* <RequestContainer /> */}
          </ChildContainer>
        )}
      </FullWidthContainer>
      <Footer />
    </>
  );
};

export default connect((state) => ({ viewState: { ...state } }), {})(App);
