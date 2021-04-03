import React, { FunctionComponent } from 'react';

import { FormBodyProps } from './types';

const FormBody: FunctionComponent<FormBodyProps> = ({
  children,
  className: parentClasses,
  description,
  ...props
}) => {
  return (
    <div className={parentClasses} {...props}>
      {description && <p className="mb-1 font-nugo">{description}</p>}
      {children}
    </div>
  );
};

export default FormBody;
