import { FullWidthContainer } from 'Components';
import { LibraryList, ServerSelection } from 'Containers';
import React, { FunctionComponent } from 'react';

export const App: FunctionComponent<DivType> = () => (
  <FullWidthContainer>
    {({ ChildContainer }) => (
      <ChildContainer>
        <ServerSelection />
        <LibraryList title="Plex List" />
        {/* <RequestList title="Request List" />
            <RequestForm title="Request Form" /> */}
        {/* <RequestContainer /> */}
      </ChildContainer>
    )}
  </FullWidthContainer>
);

export default App;
