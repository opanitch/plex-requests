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
  const buttonClasses = classNames('pr-button', parentClasses);

  return <button className={buttonClasses} disabled={disabled} {...props} />;
};

export default Button;
