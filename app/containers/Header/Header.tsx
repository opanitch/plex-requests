import { LogoIcon } from 'Atoms';
import { FullWidthContainer, RequestCTA } from 'Components';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent<DivType> = () => {
  return (
    <FullWidthContainer className="pr-header-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="pr-header">
            <div className="pr-header-top-row">
              <div className="pr-header-logo">
                <LogoIcon classes="pr-icon-logo" id="plex-request-logo" />
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
