import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { LabelPosition } from './constants';
import Label from './Label';
import { SelectInputProps } from './types';

const SelectInput: FunctionComponent<SelectInputProps> = ({
  className: parentClasses,
  defaultText = 'Select One',
  disabled = false,
  id,
  labelPosition = LabelPosition.RIGHT,
  labelText,
  name,
  onChange,
  options,
  required = false,
  title,
  ...props
}) => {
  const selectOptions = options ? [defaultText].concat(options) : [defaultText];
  // const forcedDisabled = disabled || selectOptions.length > 1;
  const forcedDisabled = disabled;

  return (
    <div
      className={classnames(
        'pr-input-container',
        {
          ['right']: labelPosition === LabelPosition.RIGHT,
          ['row']:
            labelPosition === LabelPosition.LEFT ||
            labelPosition === LabelPosition.RIGHT,
          ['col']: labelPosition === LabelPosition.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['left']: labelPosition === LabelPosition.LEFT,
            ['right']: labelPosition === LabelPosition.RIGHT,
            ['top-left']: labelPosition === LabelPosition.TOP_LEFT,
          })}
          htmlFor={id}
          required={required}
          text={labelText}
        />
      )}
      <select
        className="pr-input-radio"
        disabled={forcedDisabled}
        id={id}
        name={name}
        // Handle custom event if it exists
        onChange={onChange}
        required={required}
        title={title}
        {...props}
      >
        {selectOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
