import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Header from './containers/Header/Header';
import RequestList from './containers/Request/RequestList';
// import RequestForm from '../containers/Request/RequestForm';
import LibraryList from './containers/Library/LibraryList';

export const App: FunctionComponent<DivType> = ({ className }) => {
  return (
    <div className="plex-request">
      <Header />
      <RequestList title="Request List" />
      {/* <RequestForm title="Request Form" /> */}
      <LibraryList title="Plex List" />
    </div>
  );
};

export default connect((state) => ({ viewState: { ...state } }), {})(App);
