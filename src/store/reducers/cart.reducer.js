import { storageService } from "../../services/storage.service";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

const INITIAL_STATE = {
    cart: storageService.loadCart(),
};

export function cartReducer(state = INITIAL_STATE, action = {}) {
    let updatedCart;

    switch (action.type) {
        case ADD_TO_CART:
            console.log("action:", action);
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
                        ? {
                              ...item,
                              quantity: item.quantity + action.product.quantity,
                          }
                        : item
                );
            } else {
                updatedCart = [action.product, ...state.cart];
            }

            storageService.saveCart(updatedCart);

            return {
                ...state,
                cart: updatedCart,
            };
        case REMOVE_FROM_CART:
            console.log("action:", action);
            console.log("action.product:", action.product);
            updatedCart = state.cart.filter(
                (item) =>
                    item._id !== action.product._id ||
                    item.color !== action.product.color ||
                    item.size !== action.product.size
            );
            storageService.saveCart(updatedCart);
            return {
                ...state,
                cart: updatedCart,
            };
        case UPDATE_CART_ITEM:
            updatedCart = state.cart.map((item) =>
                item._id === action.product._id
                    ? { ...item, quantity: action.product.quantity }
                    : item
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
