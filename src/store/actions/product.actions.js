import { productService } from '../../services/product.service.local';
import {
  REMOVE_PRODUCT,
  SET_FILTER_BY,
  SET_PRODUCTS,
  SET_CURR_CATEGORY,
} from '../reducers/product.reducer';

export function loadProducts(category) {
  console.log('category:', category);
  return async (dispatch, getState) => {
    try {
      const products = await productService.query(category);
      const action = {
        type: SET_PRODUCTS,
        products,
      };
      dispatch(action);
    } catch (error) {
      console.log('error:', error);
    }
  };
}

export function removeProduct(productId) {
  return async (dispatch) => {
    try {
      await productService.remove(productId);
      const action = { type: REMOVE_PRODUCT, productId };
      dispatch(action);
      return 'Removed!';
    } catch (error) {
      console.log('error:', error);
    }
  };
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: SET_FILTER_BY, filterBy });
  };
}

export function setCurrCategory(category) {
  return (dispatch) => {
    dispatch({ type: SET_CURR_CATEGORY, category });
  };
}
