import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  buttonTheme?: string;
};

export enum ButtonTheme {
  BASE = 'BASE',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export const Button: FunctionComponent<ButtonProps> = ({
  buttonTheme = 'BASE',
  className: parentClasses,
  disabled = false,
  ...props
}) => {
  // const buttonStates = {
  //   base: !disabled,
  //   hover: !disabled,
  //   disabled: disabled,
  // };

  const buttonClasses = classNames(
    'pr-button',
    {
      // Base State
      ['pr-button--base']: buttonTheme === ButtonTheme.BASE,
      ['pr-button--primary']: buttonTheme === ButtonTheme.PRIMARY,
      ['pr-button--secondary']: buttonTheme === ButtonTheme.PRIMARY,
    },
    // {
    //   // Base Theming
    //   ['']: buttonStates.base && buttonTheme === ButtonTheme.BASE,
    //   ['pr-button--primary']:
    //     buttonStates.base && buttonTheme === ButtonTheme.PRIMARY,
    // },
    // {
    //   // Hover State
    //   ['']: buttonStates.hover && buttonTheme === ButtonTheme.BASE,
    //   ['']:
    //     buttonStates.hover && buttonTheme === ButtonTheme.PRIMARY,
    // },
    // {
    //   // Disabled State
    //   ['pointer-events-none cursor-pointer']: buttonStates.disabled,
    //   ['']: buttonStates.disabled && buttonTheme === ButtonTheme.BASE,
    //   ['pr-button-disabled']:
    //     buttonStates.disabled && buttonTheme === ButtonTheme.PRIMARY,
    // },
    parentClasses
  );

  return <button className={buttonClasses} disabled={disabled} {...props} />;
};

export default Button;
