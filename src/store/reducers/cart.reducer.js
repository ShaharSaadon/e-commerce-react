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
      console.log('action:', action);
      const itemInCart = state.cart.find(
        (item) =>
          item._id === action.product._id &&
          item.size === action.product.size &&
          item.color === action.product.color
      );

      if (itemInCart) {
        updatedCart = state.cart.map((item) =>
          item._id === action.product._id &&
          item.size === action.product.size &&
          item.color === action.product.color
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          action.product, // Use the action.product directly here
        ];
      }

      storageService.saveCart(updatedCart);

      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      updatedCart = state.cart.filter(
        (item) => item.cartItemId !== action.cartItemId
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
