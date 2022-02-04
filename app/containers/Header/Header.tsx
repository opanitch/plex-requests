import Logo from 'Atoms/Icon/Logo';
import { FullWidthContainer } from 'Components';
import { RequestCTA } from 'Components/RequestCTA/RequestCTA';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent<DivType> = () => {
  return (
    <FullWidthContainer className="pr-header-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="pr-header">
            <div className="pr-header-top-row">
              <div className="pr-header-logo">
                <Logo classes="pr-icon-logo" id="plex-request-logo" />
              </div>
              <div className="pr-header-info">
                <RequestCTA />
              </div>
            </div>
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Header;
