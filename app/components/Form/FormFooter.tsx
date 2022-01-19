import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { FormSection } from './types';

const FormFooter: FunctionComponent<FormSection> = ({
  children,
  className: parentClasses,
  ...props
}) => (
  <div className={classnames('pr-form-footer', parentClasses)} {...props}>
    {children}
  </div>
);

export default FormFooter;
