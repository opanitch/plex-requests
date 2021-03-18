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
      className={classnames(
        'font-exon text-scale-1 md:text-scale-2 tracking-wide',
        parentClasses
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {text}
      {required && <span className="text-red-700">*</span>}
    </label>
  );
};

export default Label;
