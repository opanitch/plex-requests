import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ classes, title, icon }) => {
  const classList = classes ? `pr-icon ${classes}` : 'pr-icon';
  const iconPath = `../../assets/icons/${icon}.svg`;

  return (
    <object className={classList} data={iconPath} type="image/svg+xml">
      {title}
    </object>
  );
};

Icon.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
