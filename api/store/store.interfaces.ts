import { QueryPagination } from 'API/rest/actions/library/library.actions.interfaces';

export interface PlexAPI {
  hostname: string;
  port: number;
  requestOptions: {
    authToken: string;
    deviceName: string;
    product: string;
    version: string;
    identifier: string;
    device: string;
    platform: string;
    platformVersion: string;
  };
  serverUrl: string;
  query: (path: string) => QueryPagination;
}

export type State = StateObjects & StateActions;

export interface StateActions {
  setPlex: (plex: PlexAPI) => void;
}

export interface StateObjects {
  library?: Record<string, unknown>;
  plex?: PlexAPI;
  users?: Record<string, unknown>[];
}
