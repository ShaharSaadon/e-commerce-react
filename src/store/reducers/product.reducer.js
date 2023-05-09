export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_FILTER_BY = 'SET_FILTER_BY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

const INITIAL_STATE = {
  products: null,
  cart: [],
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
    case ADD_TO_CART:
      const itemInCart = state.cart.find(
        (item) => item._id === action.product._id
      );

      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.productId),
      };

    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.product._id ? action.product : item
        ),
      };

    default:
      return state;
  }
}
