import { ACTION_TYPES } from '../constants';

const initialState = {
  testArticles: []
};

const testReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.ADD_ARTICLE:
      return Object.assign(
        {},
        {
          testArticles: state.articles.concat(action.payload)
        }
      );
    default:
      break;
  }

  return state;
};

export default testReducer;
