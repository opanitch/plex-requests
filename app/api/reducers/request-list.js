import { ACTION_TYPES } from '../constants';

const initialState = [];

const requestReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.ADD_REQUEST:
      return state.requestList.concat(action.payload);
    default:
      break;
  }

  return state;
};

export default requestReducer;
