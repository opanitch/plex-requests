import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form/Form.jsx';

class RequestForm extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <div className="pr-requestform-container">
        <Form title={title} />
      </div>
    );
  }
}

export default RequestForm;
