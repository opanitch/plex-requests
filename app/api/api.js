import { createActions } from './factory/actions';
// import { createApi } from './factory/api';
import { createReducer } from './factory/reducers';
import { createStore } from './factory/store';

// Actions
// import * as actions from './actions';
// Reducers
import rootReducer from './reducers';
import rootActions from './actions';

// let api = {};
let actions = {};
let reducer = {};
const initialState = {};
const reduxMiddleware = [];
const reduxEnhancers = [];
let store = null;

const ENV = process.env.NODE_ENV;

// eslint-disable-next-line
if (ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line
  reduxEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

reducer = createReducer(rootReducer);
store = createStore(reducer, initialState, reduxMiddleware, reduxEnhancers);
actions = createActions(store, rootActions);
// api = createApi(store, actions, rootApi);

export const builtActions = actions;
export const builtStore = store;
// export const state = api.state;
