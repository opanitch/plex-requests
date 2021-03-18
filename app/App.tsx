import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import LibraryList from './containers/Library/LibraryList';
// import RequestForm from '../containers/Request/RequestForm';
import RequestList from './containers/Request/RequestList';

export const App: FunctionComponent<DivType> = ({ className }) => {
  return (
    <>
      <Header />
      <div>
        <RequestList title="Request List" />
        {/* <RequestForm title="Request Form" /> */}
        <LibraryList title="Plex List" />
      </div>
      <Footer />
    </>
  );
};

export default connect((state) => ({ viewState: { ...state } }), {})(App);
