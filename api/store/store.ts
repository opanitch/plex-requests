import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const plexRequestStore = create(
  devtools(() => ({
    library: {},
    users: [],
  }))
);
