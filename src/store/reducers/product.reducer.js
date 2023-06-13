import { productService } from '../../services/product.service.local';
import { storageService } from '../../services/storage.service';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_FILTER_BY = 'SET_FILTER_BY';
export const SET_CURR_CATEGORY = 'SET_CURR_CATEGORY';

const INITIAL_STATE = {
  products: [],
  categories: ['מגבות', 'מצעים', 'מארזים', 'מוצרים'],
  colors: [
    { label: 'לבן', value: 'white' },
    { label: 'שחור', value: 'black' },
    { label: 'אפור', value: 'lightgray' },
    { label: 'קורל', value: 'lightcoral' },
    { label: 'כחל', value: 'lightblue' },
  ],
  sizes: ['100/100', '200/200', '300/300'],
  filterBy: [],
};

export function productReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case REMOVE_PRODUCT:
      console.log('state:', state);
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.productId
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.product._id ? action.product : product
        ),
      };
    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };
    case SET_CURR_CATEGORY:
      return {
        ...state,
        currCategory: action.category,
      };

    default:
      return state;
  }
}
