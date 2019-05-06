import { ACTION_TYPES } from './constants';

export function addArticle(payload) {
  return { type: ACTION_TYPES.ADD_ARTICLE, payload };
}

export default {
  addArticle
};
