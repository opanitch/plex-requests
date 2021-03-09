import { configureStore } from '@reduxjs/toolkit';

// import middleware, { rootEpic } from './epics';
import rootReducer from './reducers';

const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';

export const store = configureStore({
  devTools: !isProduction,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(middleware),
  reducer: rootReducer,
});

// middleware.run(rootEpic);
