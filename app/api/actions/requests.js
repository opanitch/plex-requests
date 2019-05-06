import { ACTION_TYPES } from '../constants';

const submitRequest = (user, title) => {
  return {
    type: ACTION_TYPES.MAKE_REQUEST,
    payload: {
      user: user,
      title: title
    }
  };
};

export default {
  submitRequest
};
