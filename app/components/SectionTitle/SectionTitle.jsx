import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionTitle = ({ className, text }) => {
  const titleClasses = classNames('pr-title', className);

  return <h2 className={titleClasses}>{text}</h2>;
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default SectionTitle;
