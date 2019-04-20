import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableTitle = ({ className, text }) => {
  const titleClasses = classNames('pr-form-title', className);

  return <h3 className={titleClasses}>{text}</h3>;
};

TableTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default TableTitle;
