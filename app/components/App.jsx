import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Header from '../containers/Header/Header.jsx';
import RequestList from '../containers/RequestList/RequestList.jsx';
import RequestForm from '../containers/RequestForm/RequestForm.jsx';
import LibraryList from '../containers/Library/LibraryList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RequestList />
        <RequestForm />
        <LibraryList />
      </div>
    );
  }
}

export default App;
