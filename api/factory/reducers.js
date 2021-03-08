import { combineReducers } from 'redux';

import REDUCERS from '../reducers';

const createReducer = combineReducers({ ...REDUCERS });

export default createReducer;
