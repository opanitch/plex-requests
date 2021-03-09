import { createAction } from '@reduxjs/toolkit';

export const fetchStart = createAction('@@plex-library/FETCH_START');

export const fetchComplete = createAction(
  '@@plex-library/FETCH_COMPLETE',
  ({ resolved, rejected }) => ({
    error: Boolean(rejected),
    payload: resolved || rejected,
  })
);
