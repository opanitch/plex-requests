import * as STATE_SLICES from 'CONSTANTS/state-slices';
import * as STATUSES from 'CONSTANTS/status';

import { PlexLibraryState } from './plex-library/types';
import { RequestListState } from './request-list/types';

export interface Action {
  type: string;
  payload?: any;
  error?: boolean;
}

export type StatusType = UnionOf<typeof STATUSES>;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppDispatch = typeof store.dispatch;

// export type BaseState = ReturnType<typeof store.getState>;

export interface StoreShape {
  [STATE_SLICES.PLEX_LIBRARY]: PlexLibraryState;
  [STATE_SLICES.REQUEST_LIST]: RequestListState;
}

export type StoreKey = keyof StoreShape;
