import React, {
  FormEvent,
  FunctionComponent,
  RefObject,
  useState,
} from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

import * as REGEX_NAMES from 'CONSTANTS/regex';
// import { GOOGLE_RECAPTCHA_KEY } from 'API/data/contact/constants';
// import { sendEmail } from 'API/data/contact/send-email';
// import { SendEmailAction } from 'API/data/contact/types';

import { TextInput } from 'Atoms';
import Button, { ButtonTheme } from 'Atoms/Button/Button';
// import { FormInputsType, getFormValues } from 'Components/Form/form-helpers';
import Form from 'Components/Form/Form';
import { FormStateProps } from 'Components/Form/types';

import { RequestFormViewType } from '../types';

const EditRequestForm: FunctionComponent<
  FormStateProps<RequestFormViewType>
> = ({ className: parentClasses, id, title }) => {
  const [isValid, setValidity] = useState(false);
  const [passRecaptcha, setRecaptcha] = useState(false);
  const canSubmit = isValid && passRecaptcha;
  // const recaptchaRef: RefObject<ReCAPTCHA> = React.createRef();

  return (
    <Form
      className={parentClasses}
      id={id}
      onChange={(event: FormEvent<HTMLFormElement>) => {
        // const updatedInput = event.target as FormInputsType;
        // const form = updatedInput.form;
        // // Set validity of the whole form
        // form && setValidity(form.checkValidity());
      }}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        const form = event.target as HTMLFormElement;

        // sendEmail(getFormValues(form) as SendEmailAction);
      }}
    >
      {({ FormBody, FormFooter, FormHeader }) => (
        <>
          {title && <FormHeader title={title} />}
          <FormBody
            className="mt-3"
            description={`{{@ cms.contact.form.description @}}`}
          >
            <div className="flex flex-col mb-2 md:flex-row md:justify-between">
              <TextInput
                className="w-full mb-2 md:w-1/2 md:pr-1"
                errorText="{{@ cms.contact.form.inputs.first-name.error @}}"
                id="firstName"
                labelText="{{@ cms.contact.form.inputs.first-name.label @}}"
                placeholder="{{@ cms.contact.form.inputs.first-name.placeholder @}}"
                required={true}
                regex={REGEX_NAMES.NAME}
                title="{{@ cms.contact.form.inputs.first-name.validation @}}"
                type="text"
              />
              <TextInput
                className="w-full mb-2 md:w-1/2 md:pl-1"
                errorText="{{@ cms.contact.form.inputs.last-name.error @}}"
                id="lastName"
                labelText="{{@ cms.contact.form.inputs.last-name.label @}}"
                placeholder="{{@ cms.contact.form.inputs.last-name.placeholder @}}"
                required={true}
                regex={REGEX_NAMES.NAME}
                title="{{@ cms.contact.form.inputs.last-name.validation @}}"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-2 md:flex-row md:justify-between md:items-start">
              <TextInput
                className="w-full mb-2 md:w-1/2 md:pr-1"
                errorText="{{@ cms.contact.form.inputs.email.error @}}"
                id="emailAddress"
                labelText="{{@ cms.contact.form.inputs.email.label @}}"
                placeholder="{{@ cms.contact.form.inputs.email.placeholder @}}"
                regex={REGEX_NAMES.EMAIL}
                required={true}
                title="{{@ cms.contact.form.inputs.email.validation @}}"
                type="email"
              />
              <TextInput
                className="w-full mb-2 md:w-1/2 md:pl-1"
                errorText="{{@ cms.contact.form.inputs.phone-number.error @}}"
                id="phoneNumber"
                labelText="{{@ cms.contact.form.inputs.phone-number.label @}}"
                placeholder="{{@ cms.contact.form.inputs.phone-number.placeholder @}}"
                regex={REGEX_NAMES.PHONE}
                required={false}
                title="{{@ cms.contact.form.inputs.phone-number.validation @}}"
                type="tel"
              />
            </div>
          </FormBody>
          <FormFooter>
            <div className="flex items-start justify-start w-2/3 overflow-x-hidden">
              {/* <ReCAPTCHA
                onChange={(value) => {
                  setRecaptcha(!!value);
                }}
                ref={recaptchaRef}
                sitekey={GOOGLE_RECAPTCHA_KEY}
                size="normal"
                theme="dark"
              /> */}
            </div>
            <div className="flex items-center justify-end flex-1 sm:justify-center md:justify-end lg:justify-center">
              <Button
                buttonTheme={ButtonTheme.PRIMARY}
                disabled={!canSubmit}
                type="submit"
              >{`{{@ cms.site.common.submit @}}`}</Button>
            </div>
          </FormFooter>
        </>
      )}
    </Form>
  );
};

export default EditRequestForm;
