import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import LastUpdated from '../../components/LastUpdated/LastUpdated.jsx'
import HeaderNavigation from '../../components/Navigation/HeaderNavigation.jsx'

class Header extends Component {

  render() {
    return (
      <div>
        <img src='' alt='Logo' />
        <LastUpdated />
        <HeaderNavigation />
      </div>
    );
  }
}

export default Header;
