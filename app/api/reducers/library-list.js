import { ACTION_TYPES } from '../constants';

const initialState = {
  libraryArticles: []
};

const libraryReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.ADD_ARTICLE:
      return Object.assign(
        {},
        {
          libraryArticles: state.articles.concat(action.payload)
        }
      );
    default:
      break;
  }

  return state;
};

export default libraryReducer;
