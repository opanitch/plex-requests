import { ACTION_TYPES } from '../constants';

const initialState = {
  articles: []
};

const testReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.TEST_ACTION:
      return {
        articles: state.articles.concat(action.payload)
      };
    default:
      break;
  }

  return state;
};

export default testReducer;
