import React, { FunctionComponent } from 'react';

import { Card, Header } from 'Atoms';

import { FullWidthContainer, Table } from 'Components';

const LibraryList: FunctionComponent<DivType> = ({ children, title }) => {
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
    <FullWidthContainer className="pr-librarylist-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <Card>
            <Header
              className="pr-librarylist-title"
              headerLevel={2}
              title={`${title}`}
            />
            {/* <Table
        className="pr-librarylist-table"
        content={testData.content}
        data={testData.data}
        columns={testData.columns}
      /> */}
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default LibraryList;
