import { useGetMovies } from 'API/rest/actions/library/library.actions';
import { Card, Header } from 'Atoms';
import { FullWidthContainer } from 'Components';
import React, { FunctionComponent, useEffect } from 'react';

const LibraryList: FunctionComponent<DivType> = ({ title }) => {
  const { getMovies, movies, serverMessage, status } = useGetMovies();

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log('get movies');
    console.log(movies);
    console.log(serverMessage);
  }, [status]);

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
              columns={['titles']}
              content={{
                title: 'Table Title',
              }}
              data={movies as unknown as any[]}
              noDataMessage="No Data"
            /> */}
            <ul>
              {movies &&
                (movies as any[]).map((movie, idx) => (
                  <li key={idx}>{movie.title}</li>
                ))}
            </ul>
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default LibraryList;
