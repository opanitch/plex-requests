import { Button, ButtonProps, ButtonTheme } from 'Atoms/Button/Button';
import React, { FunctionComponent } from 'react';

export const RequestCTA: FunctionComponent<ButtonProps> = () => {
  return <Button buttonTheme={ButtonTheme.PRIMARY}>Request Form</Button>;
};

export default RequestCTA;
