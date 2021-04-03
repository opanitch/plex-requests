import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  buttonTheme?: string;
};

export enum ButtonTheme {
  BASE = 'BASE',
  PRIMARY = 'PRIMARY',
}

const Button: FunctionComponent<ButtonProps> = ({
  buttonTheme = 'BASE',
  className: parentClasses,
  disabled = false,
  ...props
}) => {
  const buttonStates = {
    base: !disabled,
    hover: !disabled,
    disabled: disabled,
  };

  const buttonClasses = classNames(
    'pr-button',
    {
      // Base State
      ['']: buttonTheme === ButtonTheme.BASE,
      ['px-3 py-1 border-2 border-transparent rounded-md']:
        buttonTheme === ButtonTheme.PRIMARY,
    },
    {
      // Base Theming
      ['']: buttonStates.base && buttonTheme === ButtonTheme.BASE,
      ['bg-grey-12 border-white text-white']:
        buttonStates.base && buttonTheme === ButtonTheme.PRIMARY,
    },
    {
      // Hover State
      ['']: buttonStates.hover && buttonTheme === ButtonTheme.BASE,
      ['hover:bg-white hover:border-grey-12 hover:text-grey-12']:
        buttonStates.hover && buttonTheme === ButtonTheme.PRIMARY,
    },
    {
      // Disabled State
      ['pointer-events-none cursor-pointer']: buttonStates.disabled,
      ['']: buttonStates.disabled && buttonTheme === ButtonTheme.BASE,
      ['bg-grey-10 border-grey-10 text-grey-11']:
        buttonStates.disabled && buttonTheme === ButtonTheme.PRIMARY,
    },
    parentClasses
  );

  return <button className={buttonClasses} disabled={disabled} {...props} />;
};

export default Button;
