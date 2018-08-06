import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class HeaderNavigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-list-item">
            <a className="navigation-list-link" href="#">
              Request List
            </a>
          </li>
          <li className="navigation-list-item">
            <a className="navigation-list-link" href="#">
              Request Form
            </a>
          </li>
          <li className="navigation-list-item">
            <a className="navigation-list-link" href="#">
              Plex Library
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNavigation;
