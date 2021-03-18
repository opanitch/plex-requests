import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import { getRegExp } from 'Components/Form/form-helpers';

import Label from './Label';
import { InputProps } from './types';

export enum LabelPosition {
  LEFT = 'LEFT',
  TOP_LEFT = 'TOP_LEFT',
}

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
        'flex',
        {
          ['flex-row']: labelPosition === LabelPosition.LEFT,
          ['flex-col']: labelPosition === LabelPosition.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['mb-1']: labelPosition === LabelPosition.TOP_LEFT,
          })}
          htmlFor={id}
          required={required}
          text={labelText}
        />
      )}
      <input
        className="p-2 border-gray-300 border-1"
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
          className={classnames('ml-1 pt-1 text-scale-n2 text-red-700', {
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
