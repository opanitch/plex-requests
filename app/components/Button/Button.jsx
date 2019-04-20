import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, id, onClick, text, type }) => {
  const buttonClasses = classNames('pr-button', className);

  return (
    <button type={type} className={buttonClasses} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string
};

export default Button;
