// import { storageService } from './async-storage.service';
import axios from 'axios';
import { httpService } from './http.service';

// import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
// import { showSuccessMsg } from './event-bus.service'

export const ordersService = {
  query,
  getById,
  remove,
  createOrder,
  tokenizeCard,
  createSale,
};

async function query(filterBy = { txt: '' }) {
  console.log('orderService');
  return await httpService.get(`order`, filterBy);
}

async function getById(orderId) {
  // const user = await storageService.get(STORAGE_KEY, orderId);
  const user = await httpService.get(`order/${orderId}`);

  // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

  return user;
}

function remove(orderId) {
  // return storageService.remove(STORAGE_KEY, orderId);
  return httpService.delete(`order/${orderId}`);
}

async function createOrder(order) {
  return await httpService.post(`order`, order);
}
async function createSale(order) {
  return await httpService.post(`order/pay`, order);
}

async function tokenizeCard(cardDetails) {
  try {
    const response = await axios.post(
      'https://payme/api/v1/tokenize',
      cardDetails
    );
    return response.data;
  } catch (err) {
    console.log('Failed to tokenize card', err);
    throw err;
  }
}
