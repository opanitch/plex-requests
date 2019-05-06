// Redux
import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore
} from 'redux';

export function createStore(
  reducers,
  initialState,
  middlewareStack,
  storeEnhancers
) {
  let enhancers;

  if (storeEnhancers && storeEnhancers.length) {
    enhancers = compose(
      applyMiddleware(...middlewareStack),
      ...storeEnhancers
    );
  } else {
    enhancers = compose(applyMiddleware(...middlewareStack));
  }

  return reduxCreateStore(reducers, initialState, enhancers);
}

export default {
  createStore
};
