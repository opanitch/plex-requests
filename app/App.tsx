import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { Card } from 'Atoms';
import { FullWidthContainer } from 'Components';

import Footer from 'Containers/Footer/Footer';
import Header from 'Containers/Header/Header';
import LibraryList from 'Containers/Library/LibraryList';
import RequestContainer from 'Containers/Request/RequestContainer';

export const App: FunctionComponent<DivType> = ({ className }) => {
  return (
    <>
      <Header />
      <FullWidthContainer>
        {({ ChildContainer }) => (
          <ChildContainer>
            {/* <RequestList title="Request List" />
            <RequestForm title="Request Form" />
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
