import React, { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';

import EmptyView from './states/FormEmpty';
import FailedView from './states/FormFailure';
// import LoadingView from './FormLoading';
import SuccessView from './states/FormSuccess';
import { FormStateProps, FormStateSwitcher } from './types';

export const FormSwitcher = <Props extends FormStateProps<any>>({
  FormEdit,
  FormEmpty = EmptyView,
  FormFailure = FailedView,
  // FormLoading = LoadingView,
  FormSuccess = SuccessView,
}: FormStateSwitcher<Props>): FunctionComponent<Props> => {
  return (props: Props) => {
    const { status } = props;

    switch (status) {
      case STATUSES.EMPTY:
        return <FormEmpty {...props} />;
      case STATUSES.ERROR:
        return <FormFailure {...props} />;
      // case STATUSES.LOADING:
      //   return <FormLoading {...props} />;
      case STATUSES.READY:
        return <FormEdit {...props} />;
      case STATUSES.SUCCESS:
        return <FormSuccess {...props} />;
      default:
        return <FormEmpty {...props} />;
    }
  };
};
