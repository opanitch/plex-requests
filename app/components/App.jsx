import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../containers/Header/Header.jsx';
import RequestList from './Requests/RequestList.jsx';
import RequestForm from './Requests/RequestForm.jsx';
import LibraryList from './Library/LibraryList.jsx';

class App extends Component {
  // static propTypes = {
  //   children: PropTypes.node
  // };

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
