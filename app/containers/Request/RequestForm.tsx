import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import Form from 'Components/Form/Form';

const RequestForm: FunctionComponent = () => {
  const propTypes = {
    title: PropTypes.string.isRequired,
  };
  // const { title } = this.props;

  return (
    <div className="pr-requestform-container">
      {/* <Form title={title} /> */}
    </div>
  );
};

export default RequestForm;
