import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootReducer from 'modules';
import rootSaga from 'modules/sagas';

// Create saga saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create history
export const history = createBrowserHistory();

// Add enhancer for DevTools
const composeEnhancers = composeWithDevTools({});
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const configureStore = initialState => {
  // Create Redux Store
  const store = createStore(rootReducer, initialState, enhancers);

  // Run sagas
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
