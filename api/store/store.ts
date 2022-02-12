import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { State, StateObjects } from './store.interfaces';

const initialState: StateObjects = {
  library: undefined,
  plex: undefined,
  users: undefined,
};

export const usePlexRequestStore = create<State>(
  devtools((set) => ({
    ...initialState,
    setPlex: (plex) => {
      return set({ plex });
    },
  }))
);
