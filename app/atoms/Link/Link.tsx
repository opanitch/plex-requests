import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type LinkProps = JSX.IntrinsicElements['a'];

const Link: FunctionComponent<LinkProps> = ({
  className: parentClasses,
  href,
  target = '_self',
  ...props
}) => {
  return (
    <a
      className={classnames('', parentClasses)}
      href={href}
      target={target}
      {...props}
    />
  );
};

export default Link;
