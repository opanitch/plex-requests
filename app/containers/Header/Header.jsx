import React from 'react';
// import PropTypes from 'prop-types';

import HeaderNavigation from '../../components/Navigation/HeaderNavigation.jsx';
import Logo from '../../components/Icon/Logo.jsx';
import LastUpdated from '../../components/LastUpdated/LastUpdated.jsx';

const Header = () => {
  return (
    <header className="pr-header">
      <div className="pr-header-top-row">
        <div className="pr-header-logo">
          <Logo classes="pr-icon-logo" id="plex-request-logo" />
        </div>
        <LastUpdated />
      </div>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
