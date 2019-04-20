import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInput = ({
  handleChange,
  id,
  label,
  isRequired,
  text,
  type,
  value
}) => {
  const containerClasses = classNames('pr-input-container', 'pr-input--text');
  const inputClasses = classNames('pr-input');
  const labelClasses = classNames('pr-input-label');

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={label}>
        {text}
      </label>
      <input
        type={type}
        className={inputClasses}
        id={id}
        value={value}
        onChange={handleChange}
        required={isRequired}
      />
    </div>
  );
};

TextInput.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
