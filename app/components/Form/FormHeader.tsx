import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Header } from 'Atoms';

import { FormHeaderProps } from './types';

const FormHeader: FunctionComponent<FormHeaderProps> = ({
  className: parentClasses,
  title,
}) => (
  <div className={classnames('pr-form-title', parentClasses)}>
    <Header headerLevel={2} title={title} />
  </div>
);

export default FormHeader;
