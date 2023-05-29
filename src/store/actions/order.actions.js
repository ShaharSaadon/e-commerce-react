import { SET_ORDERS } from '../reducers/order.reducer';
import { ordersService } from '../../services/orders.service';

export function loadOrders() {
  return async (dispatch, getState) => {
    try {
      const orders = await ordersService.query();
      console.log('orders:', orders);
      const action = {
        type: SET_ORDERS,
        orders,
      };
      dispatch(action);
    } catch (error) {
      console.log('error:', error);
    }
  };
}
