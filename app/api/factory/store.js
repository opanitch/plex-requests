import browserInterface from 'browser-interface';
import { createBrowserHistory } from 'history';
import { compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';

import epics from '../epics';
import reducer from './reducers';

const browserHistory = createBrowserHistory();
const ENV = process.env.NODE_ENV;

// Allows for lazy-loading of epics:
// https://redux-observable.js.org/docs/recipes/AddingNewEpicsAsynchronously.html
export const epic$ = new BehaviorSubject(combineEpics(...epics));

const initialState = {};
const storeEnhancers = [];
const dependencies = {
  browserHistory: browserHistory,
  browserInterface: browserInterface,
  CustomEvent: window.CustomEvent,
  dispatchEvent: window.dispatchEvent,
  document: document,
  epic$: epic$,
  window: window,
  windowEvent: window.Event
};
const middleware = createEpicMiddleware({ dependencies });
const reduxMiddlewareStack = [middleware];

// eslint-disable-next-line
if (ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line
  storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancers = compose(...storeEnhancers);
const store = createStore(
  reducer,
  initialState,
  reduxMiddlewareStack,
  enhancers
);

export default store;
