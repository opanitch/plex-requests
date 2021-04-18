import React, { FunctionComponent } from 'react';

import FormBody from '../FormBody';
import FormHeader from '../FormHeader';

import { FormProps, FormStateProps } from '../types';

const FormSuccess: FunctionComponent<FormStateProps<FormProps>> = ({
  className: parentClasses,
  description,
  id,
  title,
}) => {
  return (
    <div id={id} className={parentClasses}>
      {title && <FormHeader title={title} />}
      <FormBody description={description} />
    </div>
  );
};

export default FormSuccess;
