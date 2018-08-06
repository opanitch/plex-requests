import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import LastUpdated from '../../components/LastUpdated/LastUpdated.jsx';
import HeaderNavigation from '../../components/Navigation/HeaderNavigation.jsx';

class Header extends Component {
  render() {
    return (
      <header className="pr-header">
        <div className="pr-header-top-row">
          <img className="pr-header-logo" src="" alt="Logo" />
          <LastUpdated />
        </div>
        <HeaderNavigation />
      </header>
    );
  }
}

export default Header;
