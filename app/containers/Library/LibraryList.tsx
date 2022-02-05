import { useGetMoviePagination } from 'API/rest/actions/library/library.actions';
import { usePlexRequestStore } from 'API/store/store';
import { Card, Header } from 'Atoms';
import { FullWidthContainer } from 'Components';
import { LibraryPagination } from 'Components/LibraryPagination/LibraryPagination';
import React, { FunctionComponent, useEffect, useMemo } from 'react';

const LibraryList: FunctionComponent<DivType> = ({ title }) => {
  const { plex } = usePlexRequestStore((state) => ({
    plex: state.plex,
  }));

  const {
    getMoviePagination,
    // serverMessage: paginationError,
    status: paginationStatus,
    titlePagination,
  } = useGetMoviePagination();

  useEffect(() => {
    plex && getMoviePagination(plex);
  }, [plex]);

  const isLoading = useMemo(
    () => paginationStatus !== 'done' && paginationStatus !== 'error',
    [paginationStatus]
  );

  return (
    <FullWidthContainer className="pr-librarylist-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <Card>
            {!plex ? (
              <>EMPTY</>
            ) : isLoading ? (
              <>Loading</>
            ) : (
              <>
                <Header
                  className="pr-librarylist-title"
                  headerLevel={2}
                  title={`${title}`}
                />
                <LibraryPagination pagination={titlePagination} />
                {/* <Table
              className="pr-librarylist-table"
              content={testData.content}
              data={testData.data}
              columns={testData.columns}
            /> */}
              </>
            )}
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default LibraryList;
