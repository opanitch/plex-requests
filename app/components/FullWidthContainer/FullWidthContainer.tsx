import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

interface RenderFunctionArguments {
  ChildContainer: typeof ChildContainer;
}

interface FullWidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: (a: RenderFunctionArguments) => ReactNode;
}

const ChildContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className: parentClasses,
  ...props
}) => (
  <div className={classnames(parentClasses, 'container')} {...props}>
    {children}
  </div>
);

const FullWidthContainer: FunctionComponent<FullWidthContainerProps> = ({
  children,
  className: parentClasses,
  ...props
}) => {
  return (
    <div
      className={classnames(parentClasses, 'container--full-width')}
      {...props}
    >
      {children && children({ ChildContainer })}
    </div>
  );
};

export default FullWidthContainer;
