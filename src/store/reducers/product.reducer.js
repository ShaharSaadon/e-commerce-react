import { productService } from '../../services/product.service.local';
import { storageService } from '../../services/storage.service';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_FILTER_BY = 'SET_FILTER_BY';

const INITIAL_STATE = {
  products: [],
  filterBy: {
    name: '',
    category: '',
    maxPrice: Infinity,
  },
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

    default:
      return state;
  }
}
