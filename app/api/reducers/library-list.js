import { ACTION_TYPES } from '../constants';

const initialState = {
  lastUpdated: null,
  libraryData: {},
  users: ['opanitch']
};

const libraryReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.LIBRARY_FETCH_COMPLETE:
      return {
        ...state.plex,
        libraryData: state.plex.libraryData.concat(action.payload)
      };
    case ACTION_TYPES.GET_USERS:
      return {
        ...state.plex,
        userList: state.plex.userList.concat(action.payload)
      };
    case ACTION_TYPES.UPDATE_LIBRARY:
      return {
        ...state.plex,
        libraryData: state.plex.libraryData.concat(action.payload)
      };
    default:
      break;
  }

  return state;
};

export default libraryReducer;
