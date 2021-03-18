import React, { FunctionComponent } from 'react';

import Logo from 'Atoms/Icon/Logo';
import { FullWidthContainer, LastUpdated, Navigation } from 'Components';

type HeaderType = JSX.IntrinsicElements['footer'];

const Header: FunctionComponent<HeaderType> = () => {
  return (
    <FullWidthContainer className="bg-0">
      {({ ChildContainer }) => (
        <ChildContainer>
          <footer className="pr-header">
            <Navigation />
            <div className="pr-header-top-row">
              <div className="pr-header-logo">
                <Logo classes="pr-icon-logo" id="plex-request-logo" />
              </div>
              <LastUpdated />
            </div>
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Header;
