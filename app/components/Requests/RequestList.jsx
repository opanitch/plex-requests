import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class RequestList extends Component {
  // static propTypes = {
  //   children: PropTypes.node
  // };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date Requested</td>
            <td>Votes</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matrix</td>
            <td>10/26/2017</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RequestList;
