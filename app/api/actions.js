import { ACTION_TYPES } from './constants';

import { default as LIBRARY_ACTIONS } from './actions/library';
import { default as REQUEST_ACTIONS } from './actions/requests';

export function addArticle(payload) {
  return { type: ACTION_TYPES.ADD_ARTICLE, payload };
}

export { LIBRARY_ACTIONS, REQUEST_ACTIONS };
