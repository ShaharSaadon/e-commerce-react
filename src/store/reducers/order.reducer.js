export const SET_ORDERS = 'SET_ORDERS';

const INITIAL_STATE = {
  orders: [],
};

export function orderReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
}
