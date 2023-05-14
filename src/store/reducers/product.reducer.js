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
  categories: {
    blankets: [
      {
        name: 'baby-blankets',
        imageUrl: '../assets/images/single-blankets.jpg',
      },
      {
        name: 'couple-blankets',
        imageUrl: '../assets/images/couple-blankets.jpg',
      },
      {
        name: 'winter-blankets',
        imageUrl: '../assets/images/winter-blankets.jpg',
      },
    ],
    linen: [
      {
        name: 'solo-linen',
        imageUrl: '../assets/images/regularLinen.jpg',
      },
      {
        name: 'cotton-linen',
        imageUrl: '../assets/images/specialLinen.jpg',
      },
      {
        name: 'bambuk-linen',
        imageUrl: '../assets/images/bigSizeLinen.jpg',
      },
    ],
    pillows: [
      {
        name: 'visko-pillows',
        imageUrl: '../assets/images/regularPillows.jpg',
      },
      {
        name: 'feather-pillows',
        imageUrl: '../assets/images/specialPillows.jpg',
      },
    ],
    towels: [
      {
        name: 'body-towels',
        imageUrl: '../assets/images/body-towels.jpg',
      },
      {
        name: 'hand-towels',
        imageUrl: '../assets/images/hand-towels.jpg',
      },
      {
        name: 'face-towels',
        imageUrl: '../assets/images/face-towels.jpg',
      },
    ],
  },
  colors: ['white', 'black', 'red', 'lightgray', 'navy'],
  filterBy: {
    name: '',
    category: '',
    minMax: [0, Infinity],
    colors: [''],
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
    case SET_CURR_CATEGORY:
      return {
        ...state,
        currCategory: action.category,
      };

    default:
      return state;
  }
}
