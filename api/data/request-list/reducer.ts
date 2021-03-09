import { createReducer } from '@reduxjs/toolkit';

import * as STATUSES from 'CONSTANTS/status';

import { fetchComplete, fetchStart } from './actions';
// import { DEFAULT } from './constants';
import { RequestListState } from './types';

const initialState: RequestListState = {
  form: undefined,
  userRequests: [],
  validUsers: [],
  status: STATUSES.EMPTY,
};

const requestListReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchComplete, (state, action) => ({
      ...state,
      ...action.payload,
      status: !!action.error,
    }))
    .addCase(fetchStart, (state, action) => ({
      ...state,
      status: STATUSES.LOADING,
    }))
);

export default requestListReducer;
