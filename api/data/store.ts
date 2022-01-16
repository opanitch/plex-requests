import { configureStore } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { middleware, rootEpic } from './epics';
import rootReducer from './reducers';
import { Action } from './types';

const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';

export const store = configureStore({
  devTools: !isProduction,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  reducer: rootReducer,
});

middleware.run(rootEpic as unknown as Epic<Action, Action, void, any>);
