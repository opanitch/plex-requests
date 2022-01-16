import { FullWidthContainer, RequestList } from 'Components';
import Footer from 'Containers/Footer/Footer';
import Header from 'Containers/Header/Header';
import RequestContainer from 'Containers/Request/RequestContainer';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

export const App: FunctionComponent<DivType> = () => {
  return (
    <>
      <Header />
      <FullWidthContainer>
        {({ ChildContainer }) => (
          <ChildContainer>
            <RequestList title="Request List" />
            {/* <RequestForm title="Request Form" />
            <LibraryList title="Plex List" /> */}
            <RequestContainer />
          </ChildContainer>
        )}
      </FullWidthContainer>
      <Footer />
    </>
  );
};

export default connect((state) => ({ viewState: { ...state } }), {})(App);
