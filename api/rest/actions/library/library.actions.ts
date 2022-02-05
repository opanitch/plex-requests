import { PlexAPI } from 'API/store/store.interfaces';
import { useCallback, useState } from 'react';
import {
  GetMoviePagination,
  GetTVPagination,
} from './library.actions.interfaces';

export const useGetMoviePagination = (): GetMoviePagination => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [pagination, setPagination] = useState<
    GetMoviePagination['pagination']
  >([]);

  const dispatchGetMoviePagination = useCallback(async (plex: PlexAPI) => {
    setStatus('fetching');

    try {
      const movies = await plex.query('/library/sections/1/firstCharacter');

      setPagination(movies.MediaContainer.Directory);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setPagination([]);
      setServerMessage(error as any);
      setStatus('error');
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
  const [status, setStatus] = useState('initial');
  const [movies, setMovies] = useState([]);

  const dispatchGetMovies = useCallback(
    async (plex: PlexAPI, letter: string) => {
      setStatus('fetching');

      try {
        const movies = await plex.query(
          `/library/sections/1/firstCharacter/${letter}`
        );

        setMovies(movies.MediaContainer.Metadata);
        setServerMessage('');
        setStatus('done');
      } catch (error) {
        setMovies([]);
        setServerMessage(error as any);
        setStatus('error');
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
  const [status, setStatus] = useState('initial');
  const [pagination, setPagination] = useState<GetTVPagination['pagination']>(
    []
  );

  const dispatchGetTVPagination = useCallback(async (plex: PlexAPI) => {
    setStatus('fetching');

    try {
      const tvShows = await plex.query('/library/sections/2/firstCharacter');

      setPagination(tvShows.MediaContainer.Directory);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setPagination([]);
      setServerMessage(error as any);
      setStatus('error');
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
  const [status, setStatus] = useState('initial');
  const [movies, setMovies] = useState([]);

  const dispatchGetMovies = useCallback(
    async (plex: PlexAPI, letter: string) => {
      setStatus('fetching');

      try {
        const movies = await plex.query(
          `/library/sections/2/firstCharacter/${letter}`
        );

        setMovies(movies.MediaContainer.Metadata);
        setServerMessage('');
        setStatus('done');
      } catch (error) {
        setMovies([]);
        setServerMessage(error as any);
        setStatus('error');
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
