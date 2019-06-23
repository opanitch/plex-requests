import { ACTION_TYPES } from '../constants';

const initialState = {
  requestArticles: []
};

const requestReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.ADD_ARTICLE:
      return Object.assign(
        {},
        {
          requestArticles: state.articles.concat(action.payload)
        }
      );
    default:
      break;
  }

  return state;
};

export default requestReducer;
