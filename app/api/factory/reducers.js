import { combineReducers } from 'redux';

import * as REDUCERS from '../reducers';

const createReducer = combineReducers({
  plex: REDUCERS.LIBRARY_REDUCER,
  requestList: REDUCERS.REQUEST_REDUCER,
  testSection: REDUCERS.TEST_REDUCER
});

export default createReducer;
