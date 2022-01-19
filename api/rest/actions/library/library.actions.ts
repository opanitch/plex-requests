import { apiClient } from 'API/rest/authenticate/authenticate.rest';
import { useCallback, useState } from 'react';

export const useGetMovies = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [movies, setMovies] = useState(null);

  const dispatchGetMovies = useCallback(async () => {
    setStatus('fetching');

    try {
      const movies = await apiClient.query('/library/sections/1/all');

      setMovies(movies.MediaContainer.Metadata);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setMovies(null);
      setServerMessage(error as any);
      setStatus('error');
    }
  }, []);

  return {
    getMovies: dispatchGetMovies,
    movies,
    serverMessage,
    status,
  };
};
