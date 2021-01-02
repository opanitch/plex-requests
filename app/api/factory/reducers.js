import { combineReducers } from 'redux';

import * as REDUCERS from '../reducers';

const createReducer = combineReducers({
  application: REDUCERS.TEST_REDUCER,
  plex: REDUCERS.LIBRARY_REDUCER,
  requestList: REDUCERS.REQUEST_REDUCER
});

export default createReducer;
