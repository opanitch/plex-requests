import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type CardProps = JSX.IntrinsicElements['div'];

const Card: FunctionComponent<CardProps> = ({
  children,
  className: parentClasses,
  ...props
}) => {
  return (
    <div className={classnames('card', parentClasses)} {...props}>
      {children}
    </div>
  );
};

export default Card;
