import libraryReducer from './reducers/library-list';
import requestReducer from './reducers/request-list';
import testReducers from './reducers/test-reducer';

export default {
  library: libraryReducer,
  request: requestReducer,
  test: testReducers
};
