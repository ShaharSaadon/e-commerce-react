import { productService } from '../../services/product.service';
import {
  REMOVE_PRODUCT,
  SET_FILTER_BY,
  SET_PRODUCTS,
  SET_CURR_CATEGORY,
} from '../reducers/product.reducer';

export function loadProducts(category) {
  console.log('category:', category);
  const filterBy = {
    category,
  };
  return async (dispatch, getState) => {
    try {
      const products = await productService.query(filterBy);
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
      return true;
    } catch (error) {
      console.log('error:', error);
      return false;
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
