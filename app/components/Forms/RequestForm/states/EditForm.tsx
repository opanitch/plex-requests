import React, {
  FormEvent,
  FunctionComponent,
  RefObject,
  useState,
} from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import classNames from 'classnames';

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
      className={classNames('pr-requestform', parentClasses)}
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
            className="pr-requestform-body"
            description="If the Plex Library is missing something, in your opinion, you may request it below."
          >
            <div className="pr-form-body-container pr-requestform-body-basic">
              <TextInput
                className="pr-requestform-input"
                errorText="Entry is invalid or email does not match accepted users"
                id="requestEmail"
                labelText="Plex User Email"
                placeholder="example@email.com"
                required={true}
                regex={REGEX_NAMES.EMAIL}
                title="Please enter a valid email address"
                type="email"
              />
              <TextInput
                className="pr-requestform-input"
                errorText="Please enter a valid title, a-Z,0-9 chars only"
                id="requestTitle"
                labelText="Request Title"
                placeholder="Pulp Fiction"
                required={true}
                regex={REGEX_NAMES.NAME}
                title="Please enter a valid title, a-Z,0-9 chars only"
                type="text"
              />
            </div>
          </FormBody>
          <FormFooter className="pr-requestform-actions">
            {/* <div className="flex items-start justify-start w-2/3 overflow-x-hidden"> */}
            {/* <ReCAPTCHA
                onChange={(value) => {
                  setRecaptcha(!!value);
                }}
                ref={recaptchaRef}
                sitekey={GOOGLE_RECAPTCHA_KEY}
                size="normal"
                theme="dark"
              /> */}
            {/* </div>
            <div className="flex items-center justify-end flex-1 sm:justify-center md:justify-end lg:justify-center"> */}
            <Button
              buttonTheme={ButtonTheme.PRIMARY}
              className="pr-requestform-submit"
              disabled={!canSubmit}
              type="submit"
            >
              Submit
            </Button>
            {/* </div> */}
          </FormFooter>
        </>
      )}
    </Form>
  );
};

export default EditRequestForm;
