import { Header } from 'Atoms';
import React, { FunctionComponent } from 'react';

// import { Table } from 'Components';

const RequestList: FunctionComponent<DivType> = ({ title }) => {
  // const testData = {
  //   columns: [
  //     { content: 'Image' },
  //     { content: 'Title' },
  //     { content: 'Requested By' },
  //     { content: '# of Requests' },
  //   ],
  //   content: {
  //     title: 'Inherited Table Title',
  //   },
  //   data: [
  //     {
  //       image: './assets/images/placeholder.jpg',
  //       content: 'placeholder',
  //     },
  //     {
  //       content: 'Rick & Morty',
  //     },
  //     {
  //       content: 'oreokid200@gmail.com',
  //     },
  //     {
  //       content: '1',
  //     },
  //   ],
  // };

  return (
    <>
      <Header
        className="pr-requestlist-title"
        headerLevel={2}
        title={`${title}`}
      />
      {/* <Table
        className="pr-requestlist-table"
        content={testData.content}
        data={testData.data}
        columns={testData.columns}
      /> */}
    </>
  );
};

export default RequestList;
