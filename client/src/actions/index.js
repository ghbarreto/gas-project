import axios from 'axios';
import { FETCH_PRODUCTS, SUBMIT_ORDER, ORDER_PLACEHOLDER } from './types';

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products');

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const submitOrder = values => async dispatch => {
  const res = await axios.post('/api/orders', values);

  return dispatch({ type: SUBMIT_ORDER, payload: res.data });
};

export const orderPlaceholder = () => async dispatch => {
  const res = await axios.get('/api/orders');

  dispatch({ type: ORDER_PLACEHOLDER, payload: res.data });
};
