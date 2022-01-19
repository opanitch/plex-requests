import classnames from 'classnames';
import { getRegExp } from 'Components/Form/form-helpers';
import React, { FunctionComponent, useState } from 'react';
import { LabelPosition } from './constants';
import Label from './Label';
import { InputProps } from './types';

const TextInput: FunctionComponent<InputProps> = ({
  className: parentClasses,
  disabled = false,
  errorText,
  id,
  labelPosition = LabelPosition.TOP_LEFT,
  labelText,
  onChange,
  pattern,
  regex,
  required = false,
  title,
  type = 'text',
  ...props
}) => {
  const RegExpPattern = pattern || (regex && getRegExp(regex)?.pattern);
  const [error, showError] = useState(false);

  return (
    <div
      className={classnames(
        'pr-input-container',
        {
          ['row']: labelPosition === LabelPosition.LEFT,
          ['col']: labelPosition === LabelPosition.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['top-left']: labelPosition === LabelPosition.TOP_LEFT,
          })}
          htmlFor={id}
          required={required}
          text={labelText}
        />
      )}
      <input
        className="pr-input"
        disabled={disabled}
        id={id}
        // Only validate field onBlur
        onBlur={(event) => showError(!event.target.checkValidity())}
        // Handle custom event if it exists
        onChange={onChange}
        pattern={`${RegExpPattern}`}
        required={required}
        title={title}
        type={type}
        {...props}
      />
      {errorText && (
        <p
          className={classnames('pr-input-error', {
            ['visually-hidden']: !error,
          })}
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default TextInput;
