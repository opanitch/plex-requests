import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import LastUpdated from '../../components/LastUpdated/LastUpdated.jsx';
import HeaderNavigation from '../../components/Navigation/HeaderNavigation.jsx';

class Header extends Component {
  render() {
    return (
      <header className="pr-header">
        <img className="pr-header-logo" src="" alt="Logo" />
        <LastUpdated />
        <HeaderNavigation />
      </header>
    );
  }
}

export default Header;
