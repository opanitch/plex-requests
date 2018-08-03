import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class HeaderNavigation extends Component {

  render() {
    return (
        <nav>
            <ul>
                <li>Request List</li>
                <li>Request Form</li>
                <li>Plex Library</li>
            </ul>
        </nav>
    );
  }
}

export default HeaderNavigation;
