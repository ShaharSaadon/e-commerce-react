import { storageService } from '../../services/storage.service';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

const INITIAL_STATE = {
  cart: storageService.loadCart(),
};

export function cartReducer(state = INITIAL_STATE, action = {}) {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(
        (item) => item._id === action.product._id
      );

      if (itemInCart) {
        updatedCart = state.cart.map((item) =>
          item._id === action.product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.product, quantity: 1 }];
      }
      storageService.saveCart(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      updatedCart = state.cart.filter(
        (product) => product._id !== action.productId
      );
      storageService.saveCart(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case UPDATE_CART_ITEM:
      updatedCart = state.cart.map((item) =>
        item._id === action.product._id ? action.product : item
      );
      storageService.saveCart(updatedCart);

      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
}
