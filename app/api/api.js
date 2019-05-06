const initialState = {};
const reduxEnhancers = [];
let store;
let actions;
let reducer;
let api;

const ENV = process.env.NODE_ENV;

// eslint-disable-next-line
if (ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-next-line
  reduxEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
