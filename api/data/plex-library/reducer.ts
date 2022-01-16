import { createReducer } from '@reduxjs/toolkit';
import * as STATUSES from 'CONSTANTS/status';
import { fetchComplete, fetchStart } from './actions';
// import { DEFAULT } from './constants';
import { PlexLibraryState } from './types';

const initialState: PlexLibraryState = {
  plexContent: undefined,
  status: STATUSES.EMPTY,
};

const plexLibraryReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchComplete, (state, action) => ({
      ...state,
      endTime: action.payload.currentTime,
    }))
    .addCase(fetchStart, (state) => ({
      ...state,
      status: STATUSES.LOADING,
    }))
);

export default plexLibraryReducer;
