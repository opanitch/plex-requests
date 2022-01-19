import React, { FunctionComponent } from 'react';

import FormBody from './FormBody';
import FormFooter from './FormFooter';
import FormHeader from './FormHeader';
// import LoadingView from './FormLoading';
import { FormConfigType } from './types';

const Form: FunctionComponent<FormConfigType> = ({
  children,
  className: parentClasses,
  id,
  onChange,
  onSubmit = (event) => {
    // This here to catch any forms without submission handlers
    console.log('DEFAULT SUBMIT');
    console.log(event);
  },
}) => (
  <form
    className={parentClasses}
    id={id}
    onChange={onChange}
    onSubmit={(event) => {
      // prevent all default form submit functions
      event.preventDefault();
      onSubmit(event);
    }}
  >
    {children && children({ FormBody, FormFooter, FormHeader })}
  </form>
);

export default Form;
