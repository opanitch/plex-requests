import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeaderProps {
  className?: string;
  headerLevel?: number;
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  className: parentClasses,
  headerLevel = 1,
  title,
}) => {
  const Header = `h${headerLevel}` as HeaderType;
  const headerClass = `text-h${headerLevel}`;

  return (
    <Header className={classnames(headerClass, parentClasses)}>{title}</Header>
  );
};

export default Header;
