import { ACTION_TYPES } from '../constants';

const initialState = {
  articles: []
};

export default function requestReducer(state = initialState, action) {
  switch (action) {
    case ACTION_TYPES.ADD_ARTICLE:
      return Object.assign(
        {},
        {
          articles: state.articles.concat(action.payload)
        }
      );
    default:
      break;
  }

  return state;
}
