import { combineReducers } from 'redux';

import * as STATE_SLICES from 'CONSTANTS/state-slices';

import plexLibraryReducer from './plex-library/reducer';
import requestReducer from './request-list/reducer';

const reducerObject = {
  [STATE_SLICES.PLEX_LIBRARY]: plexLibraryReducer,
  [STATE_SLICES.REQUEST_LIST]: requestReducer,
};
const rootReducer = combineReducers(reducerObject);

export default rootReducer;
