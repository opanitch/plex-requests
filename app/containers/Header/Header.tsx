import React, { FunctionComponent } from 'react';

import Logo from 'Atoms/Icon/Logo';
import { FullWidthContainer, LastUpdated, Navigation } from 'Components';

type HeaderType = JSX.IntrinsicElements['header'];

const Header: FunctionComponent<HeaderType> = () => {
  return (
    <FullWidthContainer className="pr-header-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="pr-header">
            <div className="pr-header-top-row">
              <div className="pr-header-logo">
                <Logo classes="pr-icon-logo" id="plex-request-logo" />
              </div>
              <LastUpdated />
            </div>
            <Navigation />
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Header;
