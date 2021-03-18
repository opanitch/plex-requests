import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ListItemType = JSX.IntrinsicElements['li'] & {
  className?: string;
};

const ListItem: FunctionComponent<ListItemType> = ({
  children,
  className: parentClasses,
  ...props
}) => {
  return (
    <li
      className={classnames('', parentClasses)}
      children={children}
      {...props}
    />
  );
};

export default ListItem;
