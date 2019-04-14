import React from 'react';
import PropTypes from 'prop-types';

const LastUpdated = ({ text }) => {
  const lastUpdateTime = new Date();
  const updatedCopy = `Last Updated: ${lastUpdateTime}`;
  const copy = !text ? updatedCopy : `${text} | ${updatedCopy}`;

  return <div className="pr-header-lastUpdate">{copy}</div>;
};

LastUpdated.propTypes = {
  text: PropTypes.string
};

export default LastUpdated;
