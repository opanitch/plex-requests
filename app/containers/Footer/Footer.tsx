import { FullWidthContainer } from 'Components';
import React, { FunctionComponent } from 'react';

type HeaderType = JSX.IntrinsicElements['footer'];

const Header: FunctionComponent<HeaderType> = () => {
  return (
    <FullWidthContainer className="pr-footer-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <footer className="pr-footer">
            <div className="pr-footer-top-row">
              &copy; {new Date().getFullYear()} Oren Panitch
            </div>
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Header;
