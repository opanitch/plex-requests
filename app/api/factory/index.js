import store from '../store';
import { TEST_ACTIONS } from '../actions';

window.store = store;
window.addArticle = TEST_ACTIONS.addArticle;
