import { PlexAPI } from 'API/store/store.interfaces';
import { ActionHook } from '../actions.interface';

export interface GetMoviePagination extends ActionHook {
  getMoviePagination: (plex: PlexAPI) => void;
  pagination: TitlePagination[];
}

export interface GetMoviesByLetter extends ActionHook {
  getMoviesByLetter: (plex: PlexAPI) => void;
  media: TitlePagination[];
}

export interface GetTVPagination extends ActionHook {
  getTVPagination: (plex: PlexAPI) => void;
  pagination: TitlePagination[];
}

export interface GetTVByLetter extends ActionHook {
  getTVByLetter: (plex: PlexAPI) => void;
  media: TitlePagination[];
}

export interface TitlePagination {
  key: string;
  size: number;
  title: string;
}

export interface MediaByLetterResponse {
  MediaContainer: {
    size: number;
    allowSync: boolean;
    art: string;
    content: string;
    identifier: string;
    mediaTagPrefix: string;
    mediaTagVersion: number;
    thumb: string;
    title1: string;
    title2: string;
    viewGroup: string;
    viewMode: number;
    Directory: TitlePagination[];
    Metadata: [];
  };
}

export interface QueryPaginationResponse {
  MediaContainer: {
    allowSync: boolean;
    art: string;
    content: string;
    identifier: string;
    mediaTagPrefix: string;
    mediaTagVersion: number;
    size: number;
    thumb: string;
    title1: string;
    title2: string;
    viewGroup: string;
    viewMode: number;
    Directory: TitlePagination[];
  };
}
