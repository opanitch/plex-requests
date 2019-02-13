import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import HeaderNavigation from '../../components/Navigation/HeaderNavigation.jsx';
import Icon from '../../components/Icon/Icon.jsx';
import LastUpdated from '../../components/LastUpdated/LastUpdated.jsx';

class Header extends Component {
  render() {
    return (
      <header className="pr-header">
        <div className="pr-header-top-row">
          <Icon title="Logo" icon="logo" classes="pr-icon-logo" />
          <LastUpdated />
        </div>
        <HeaderNavigation />
      </header>
    );
  }
}

export default Header;
