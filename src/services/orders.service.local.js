import { storageService } from './async-storage.service';
// import { httpService } from './http.service'

// import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
// import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY = 'order';
const gOrders = [
  {
    _id: '1',
    createdAt: Date.now(),
    user: 'userId',
  },
  {
    _id: '2',
    createdAt: Date.now(),
    user: 'userId',
  },
];

export const ordersService = {
  query,
  getById,
  remove,
};

async function query(filterBy = { txt: '' }) {
  let updatedOrders = await storageService.query(STORAGE_KEY);
  if (!updatedOrders || updatedOrders.length === 0) {
    await _postOrders();
    updatedOrders = await storageService.query(STORAGE_KEY);
  }

  return updatedOrders;
  // return await httpService.get(`user`, filterBy)
}

async function getById(orderId) {
  const user = await storageService.get(STORAGE_KEY, orderId);
  // const user = await httpService.get(`user/${userId}`)

  // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

  return user;
}

function remove(userId) {
  return storageService.remove(STORAGE_KEY, userId);
  // return httpService.delete(`user/${userId}`)
}

async function _postOrders() {
  for (let i = 0; i < gOrders.length; i++) {
    await storageService.post(STORAGE_KEY, gOrders[i]);
  }
}
