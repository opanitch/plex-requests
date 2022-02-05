import { Status } from 'API/rest/actions/actions.interface';
import {
  useGetMoviePagination,
  useGetMoviesByLetter,
} from 'API/rest/actions/library/library.actions';
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
    status,
    pagination,
  } = useGetMoviePagination();

  const {
    getMoviesByLetter,
    movies,
    // serverMessage: moviesError,
    status: moviesStatus,
  } = useGetMoviesByLetter();

  const isLoading = useMemo(
    () => status !== Status.SUCCESS && status !== Status.ERROR,
    [status]
  );

  useEffect(() => {
    plex && getMoviePagination(plex);
  }, [plex]);

  useEffect(() => {
    if (moviesStatus === Status.SUCCESS) {
      console.log(movies);
    }
  }, [movies]);

  const onPaginationClick = (event) => {
    console.log(event);

    plex && getMoviesByLetter(plex, event.target.value);
  };

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
                <LibraryPagination
                  pagination={pagination}
                  onClick={onPaginationClick}
                />
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
