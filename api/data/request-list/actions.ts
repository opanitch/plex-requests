import { createAction } from '@reduxjs/toolkit';

export const fetchStart = createAction('@@request-list/FETCH_START');

export const fetchComplete = createAction(
  '@@request-list/FETCH_COMPLETE',
  ({ resolved, rejected }) => ({
    error: Boolean(rejected),
    payload: resolved || rejected,
  })
);
