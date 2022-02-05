import { PlexAPI } from 'API/store/store.interfaces';
import { useCallback, useState } from 'react';
import {
  GetMoviePagination,
  QueryPagination,
} from './library.actions.interfaces';

export const useGetMoviePagination = (): GetMoviePagination => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [titlePagination, setTitlePagination] = useState<
    GetMoviePagination['titlePagination']
  >([]);

  const dispatchGetMoviePagination = useCallback(async (plex: PlexAPI) => {
    setStatus('fetching');

    try {
      const movies: QueryPagination = await plex.query(
        '/library/sections/1/firstCharacter'
      );

      setTitlePagination(movies.MediaContainer.Directory);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setTitlePagination([]);
      setServerMessage(error as any);
      setStatus('error');
    }
  }, []);

  return {
    getMoviePagination: dispatchGetMoviePagination,
    serverMessage,
    status,
    titlePagination,
  };
};

// export const useGetTVPagination = (): GetMoviePagination => {
//   const [serverMessage, setServerMessage] = useState('');
//   const [status, setStatus] = useState('initial');
//   const [titlePagination, setTitlePagination] = useState([]);

//   const dispatchGetMoviePagination = useCallback(async (plex: PlexAPI) => {
//     setStatus('fetching');

//     try {
//       const movies: TVTitlePagination[] = await plex.query('/library/sections/1/firstCharacter');

//       setTitlePagination(movies.MediaContainer.Directory);
//       setServerMessage('');
//       setStatus('done');
//     } catch (error) {
//       setTitlePagination([]);
//       setServerMessage(error as any);
//       setStatus('error');
//     }
//   }, []);

//   return {
//     getMoviePagination: dispatchGetMoviePagination,
//     serverMessage,
//     status,
//     titlePagination,
//   };
// };

// export const useGetMovies = () => {
//   const [serverMessage, setServerMessage] = useState('');
//   const [status, setStatus] = useState('initial');
//   const [movies, setMovies] = useState(null);

//   const dispatchGetMovies = useCallback(async () => {
//     setStatus('fetching');

//     try {
//       const movies = await apiClient.query(
//         '/library/sections/1/firstCharacter'
//       );

//       setMovies(movies.MediaContainer.Metadata);
//       setServerMessage('');
//       setStatus('done');
//     } catch (error) {
//       setMovies(null);
//       setServerMessage(error as any);
//       setStatus('error');
//     }
//   }, []);

//   return {
//     getMovies: dispatchGetMovies,
//     movies,
//     serverMessage,
//     status,
//   };
// };
