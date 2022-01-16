// import * as STATUSES from 'CONSTANTS/status';
// import { createFormStatusEvent } from 'HOOKS/forms';
import Button, { ButtonTheme } from 'Atoms/Button/Button';
import React, { FunctionComponent } from 'react';
import FormBody from '../FormBody';
import FormFooter from '../FormFooter';
import FormHeader from '../FormHeader';
import { FormProps, FormStateProps } from '../types';

const FormFailure: FunctionComponent<FormStateProps<FormProps>> = ({
  className: parentClasses,
  description = '{{@ cms.site.form-defaults.error.description @}}',
  id,
  title = '{{@ cms.site.form-defaults.error.title @}}',
}) => {
  return (
    <div id={id} className={parentClasses}>
      {title && <FormHeader title={title} />}
      <FormBody description={description}>
        <p>{'{{@ cms.site.form-defaults.error.message @}}'}</p>
      </FormBody>
      <FormFooter>
        <Button
          buttonTheme={ButtonTheme.PRIMARY}
          // onClick={() =>
          //   window.dispatchEvent(createFormStatusEvent(STATUSES.READY))
          // }
          type="button"
        >{`{{@ cms.site.common.reset @}}`}</Button>
      </FormFooter>
    </div>
  );
};

export default FormFailure;
