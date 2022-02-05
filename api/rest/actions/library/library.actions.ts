import { PlexAPI } from 'API/store/store.interfaces';
import { useCallback, useState } from 'react';
import { Status } from '../actions.interface';
import {
  GetMoviePagination,
  GetTVPagination,
} from './library.actions.interfaces';

export const useGetMoviePagination = (): GetMoviePagination => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [pagination, setPagination] = useState<
    GetMoviePagination['pagination']
  >([]);

  const dispatchGetMoviePagination = useCallback(async (plex: PlexAPI) => {
    setStatus(Status.BUSY);

    try {
      const movies = await plex.query('/library/sections/1/firstCharacter');

      setPagination(movies.MediaContainer.Directory);
      setServerMessage('');
      setStatus(Status.SUCCESS);
    } catch (error) {
      setPagination([]);
      setServerMessage(error as any);
      setStatus(Status.ERROR);
    }
  }, []);

  return {
    getMoviePagination: dispatchGetMoviePagination,
    serverMessage,
    status,
    pagination,
  };
};

export const useGetMoviesByLetter = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [movies, setMovies] = useState([]);

  const dispatchGetMovies = useCallback(
    async (plex: PlexAPI, letter: string) => {
      setStatus(Status.BUSY);

      try {
        const movies = await plex.query(
          `/library/sections/1/firstCharacter/${letter}`
        );

        setMovies(movies.MediaContainer.Metadata);
        setServerMessage('');
        setStatus(Status.SUCCESS);
      } catch (error) {
        setMovies([]);
        setServerMessage(error as any);
        setStatus(Status.ERROR);
      }
    },
    []
  );

  return {
    getMovies: dispatchGetMovies,
    movies,
    serverMessage,
    status,
  };
};

export const useGetTVPagination = (): GetTVPagination => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [pagination, setPagination] = useState<GetTVPagination['pagination']>(
    []
  );

  const dispatchGetTVPagination = useCallback(async (plex: PlexAPI) => {
    setStatus(Status.BUSY);

    try {
      const tvShows = await plex.query('/library/sections/2/firstCharacter');

      setPagination(tvShows.MediaContainer.Directory);
      setServerMessage('');
      setStatus(Status.SUCCESS);
    } catch (error) {
      setPagination([]);
      setServerMessage(error as any);
      setStatus(Status.ERROR);
    }
  }, []);

  return {
    getTVPagination: dispatchGetTVPagination,
    serverMessage,
    status,
    pagination,
  };
};

export const useGetTVByLetter = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [movies, setMovies] = useState([]);

  const dispatchGetMovies = useCallback(
    async (plex: PlexAPI, letter: string) => {
      setStatus(Status.BUSY);

      try {
        const movies = await plex.query(
          `/library/sections/2/firstCharacter/${letter}`
        );

        setMovies(movies.MediaContainer.Metadata);
        setServerMessage('');
        setStatus(Status.SUCCESS);
      } catch (error) {
        setMovies([]);
        setServerMessage(error as any);
        setStatus(Status.ERROR);
      }
    },
    []
  );

  return {
    getMovies: dispatchGetMovies,
    movies,
    serverMessage,
    status,
  };
};
