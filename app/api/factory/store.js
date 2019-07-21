import { compose, createStore } from 'redux';

import reducer from './reducers';

const initialState = {
  plex: {},
  requestList: []
};
const storeEnhancers = [];
const ENV = process.env.NODE_ENV;

// eslint-disable-next-line
if (ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line
  storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancers = compose(...storeEnhancers);
const store = createStore(reducer, initialState, enhancers);

export default store;
