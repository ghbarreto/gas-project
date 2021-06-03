import { FETCH_PRODUCTS, ORDER_PLACEHOLDER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ...action.payload };
    case ORDER_PLACEHOLDER:
      return { ...state, order_placeholder: action.payload };
    default:
      return state;
  }
};
