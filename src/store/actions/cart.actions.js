import {
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  ADD_TO_CART,
} from '../reducers/cart.reducer';

export function addToCart(product, quantity = 1) {
  return {
    type: ADD_TO_CART,
    product,
    quantity,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId,
  };
}

export function updateCartItem(product) {
  return {
    type: UPDATE_CART_ITEM,
    product,
  };
}
