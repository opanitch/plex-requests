// import { useGetMovies } from 'API/rest/actions/library/library.actions';
import { MediaMetaData } from 'API/rest/dto/query.interfaces';
import { Table } from 'Atoms';
import React, { FunctionComponent, useMemo } from 'react';
import { ColumnShape } from 'react-base-table';
import { convertCameltoCapital } from '../../util/common.util';

interface LibraryListType {
  media: MediaMetaData[];
}

const columnsToDisplay = ['title', 'year', 'contentRating', 'addedAt'];

const LibraryList: FunctionComponent<LibraryListType> = ({ media }) => {
  const columns: ColumnShape[] | undefined = useMemo(
    () =>
      media.length
        ? columnsToDisplay.map((mediaKey) => {
            return {
              dataKey: mediaKey,
              key: mediaKey,
              title: convertCameltoCapital(mediaKey),
              width: 0,
            };
          })
        : undefined,
    [media]
  );
  const expandColumnKey = useMemo(
    () => columns && (columns[0].key as string),
    [columns]
  );

  const data = useMemo(
    () =>
      media.length
        ? media.map((mediaObj, index) => {
            return {
              ...mediaObj,
              ...(mediaObj.addedAt && {
                addedAt: new Date(mediaObj.addedAt * 1000),
              }),
              children: [
                {
                  content: mediaObj.summary,
                  id: `row-${index}-details`,
                },
              ],
              id: `row-${index}`,
              parentId: null,
            };
          })
        : undefined,
    [media]
  );

  return (
    <Table
      columns={columns}
      data={data}
      expandColumnKey={expandColumnKey}
      maxHeight={600}
    />
  );
};

export default LibraryList;
