import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type LabelProps = JSX.IntrinsicElements['label'] & {
  htmlFor: string;
  required?: boolean;
  text: string;
};

const Label: FunctionComponent<LabelProps> = ({
  className: parentClasses,
  htmlFor,
  required,
  text,
  ...props
}) => {
  return (
    <label
      className={classnames('pr-input-label', parentClasses)}
      htmlFor={htmlFor}
      {...props}
    >
      {text}
      {required && <span className="pr-input-label--required">*</span>}
    </label>
  );
};

export default Label;
