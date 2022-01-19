import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ListVariations = 'ul' | 'ol';

type ListTypes = JSX.IntrinsicElements['ul'] & JSX.IntrinsicElements['ol'];

type ListType = ListTypes & {
  className?: string;
  isOrdered?: boolean;
};

const List: FunctionComponent<ListType> = ({
  children,
  className: parentClasses,
  isOrdered = false,
  ...props
}) => {
  const ListType: ListVariations = isOrdered ? `ol` : `ul`;

  return (
    <ListType
      className={classnames('', parentClasses)}
      children={children}
      {...props}
    />
  );
};

export default List;
