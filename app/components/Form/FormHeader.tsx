import React, { FunctionComponent } from 'react';

import { Header } from 'Atoms';

import { FormHeaderProps } from './types';

const FormHeader: FunctionComponent<FormHeaderProps> = ({
  className: parentClasses,
  title,
}) => (
  <div className={parentClasses}>
    <Header className="mb-1" headerLevel={2} title={title} />
  </div>
);

export default FormHeader;
