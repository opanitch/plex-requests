import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { FormBodyProps } from './types';

const FormBody: FunctionComponent<FormBodyProps> = ({
  children,
  className: parentClasses,
  description,
  ...props
}) => {
  return (
    <div className={classnames('pr-form-body', parentClasses)} {...props}>
      {description && <p className="pr-form-body-description">{description}</p>}
      {children}
    </div>
  );
};

export default FormBody;
