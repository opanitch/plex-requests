import { MediaMetaData, TitlePagination } from 'API/rest/dto/query.interfaces';
import { PlexAPI } from 'API/store/store.interfaces';
import { ActionHook } from '../actions.interface';

export interface GetMoviePagination extends ActionHook {
  getMoviePagination: (plex: PlexAPI) => void;
  pagination: TitlePagination[];
}

export interface GetMoviesByLetter extends ActionHook {
  getMoviesByLetter: (plex: PlexAPI, letter: string) => void;
  movies: MediaMetaData[];
}

export interface GetTVPagination extends ActionHook {
  getTVPagination: (plex: PlexAPI) => void;
  pagination: TitlePagination[];
}

export interface GetTVByLetter extends ActionHook {
  getTVByLetter: (plex: PlexAPI, letter: string) => void;
  tvShows: MediaMetaData[];
}
