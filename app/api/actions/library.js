import { ACTION_TYPES } from '../constants';

export const getLibrary = (user, token) => {
  return {
    type: ACTION_TYPES.GET_LIBRARY,
    payload: {
      user: user,
      token: token
    }
  };
};

export const setLibrary = data => {
  return {
    type: ACTION_TYPES.SET_LIBRARY,
    payload: {
      data: data
    }
  };
};

export const setLibraryFilter = filterName => {
  return {
    type: ACTION_TYPES.SET_LIBRARY_FILTER,
    payload: {
      filter: filterName
    }
  };
};

export default {
  getLibrary,
  setLibrary,
  setLibraryFilter
};
