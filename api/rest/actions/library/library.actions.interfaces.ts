import { PlexAPI } from 'API/store/store.interfaces';
import { ActionHook } from '../actions.interface';

export interface GetMoviePagination extends ActionHook {
  getMoviePagination: (plex: PlexAPI) => void;
  titlePagination: MovieTitlePagination[];
}

export interface MovieTitlePagination {
  key: string;
  size: number;
  title: string;
}

export interface QueryPagination {
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
    Directory: MovieTitlePagination[];
  };
}
