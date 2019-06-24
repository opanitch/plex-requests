import { ACTION_TYPES } from '../constants';

const initialState = {
  plex: {
    lastUpdated: null,
    libraryData: {},
    users: []
  }
};

const libraryReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.GET_LIBRARY:
      return {
        plex: {
          ...state.plex,
          libraryData: state.plex.libraryData.concat(action.payload)
        }
      };
    case ACTION_TYPES.GET_USERS:
      return {
        plex: {
          ...state.plex,
          userList: state.plex.userList.concat(action.payload)
        }
      };
    case ACTION_TYPES.UPDATE_LIBRARY:
      return {
        plex: {
          ...state.plex,
          libraryData: state.plex.libraryData.concat(action.payload)
        }
      };
    default:
      break;
  }

  return state;
};

export default libraryReducer;
