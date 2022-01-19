import { FormSwitcher } from 'Components/Form/FormStateHandler';

import EditRequestForm from './states/EditForm';
// import SuccessRequestForm from './states/SuccessForm';

const RequestForm = FormSwitcher({
  FormEdit: EditRequestForm,
  // FormSuccess: SuccessRequestForm,
});

export default RequestForm;
