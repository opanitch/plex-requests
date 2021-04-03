import React, { FunctionComponent } from 'react';

import { Card, Header } from 'Atoms';

import { FullWidthContainer, RequestList } from 'Components';
import RequestForm from 'Components/Forms/RequestForm';

const RequestContainer: FunctionComponent<DivType> = ({ children, title }) => {
  const testData = {
    columns: [
      { content: 'Image' },
      { content: 'Title' },
      { content: 'Requested By' },
      { content: '# of Requests' },
    ],
    content: {
      title: 'Inherited Table Title',
    },
    data: [
      {
        image: './assets/images/placeholder.jpg',
        content: 'placeholder',
      },
      {
        content: 'Rick & Morty',
      },
      {
        content: 'oreokid200@gmail.com',
      },
      {
        content: '1',
      },
    ],
  };

  return (
    <FullWidthContainer className="pr-requestlist-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <RequestForm id="request-form" status="READY" />
          <RequestList />
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default RequestContainer;
