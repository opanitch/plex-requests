import { compose, createStore } from 'redux';

import reducers from './reducers';

const initialState = {};
const storeEnhancers = [];
const ENV = process.env.NODE_ENV;

// eslint-disable-next-line
if (ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line
  storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancers = compose(...storeEnhancers);
const store = createStore(reducers, initialState, enhancers);

export default store;
