import { Status } from 'API/rest/actions/actions.interface';
import {
  useGetMoviePagination,
  useGetMoviesByLetter,
} from 'API/rest/actions/library/library.actions';
import { usePlexRequestStore } from 'API/store/store';
import { Card, Header } from 'Atoms';
import {
  FullWidthContainer,
  LibraryListTable,
  LibraryPagination,
} from 'Components';
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
    // status: moviesStatus,
  } = useGetMoviesByLetter();

  const isLoading = useMemo(
    () => status !== Status.SUCCESS && status !== Status.ERROR,
    [status]
  );

  useEffect(() => {
    plex && getMoviePagination(plex);
  }, [plex]);

  const onPaginationClick = (event) => {
    plex && getMoviesByLetter(plex, event.target.value);
  };

  return !plex ? null : (
    <FullWidthContainer className="pr-librarylist-container">
      {({ ChildContainer }) => (
        <ChildContainer>
          <Card className="pr-librarylist-card">
            {isLoading ? (
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
                <LibraryListTable media={movies} />
              </>
            )}
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default LibraryList;
