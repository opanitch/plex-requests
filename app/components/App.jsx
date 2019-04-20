import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../containers/Header/Header.jsx';
import RequestList from '../containers/Request/RequestList.jsx';
import RequestForm from '../containers/Request/RequestForm.jsx';
import LibraryList from '../containers/Library/LibraryList.jsx';

export const App = () => {
  console.log();

  return (
    <div className="plex-request">
      <Header />
      <RequestList title="Request List" />
      <RequestForm title="Request Form" />
      <LibraryList title="Plex List" />
    </div>
  );
};

export default App;
