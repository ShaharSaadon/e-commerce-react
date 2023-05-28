import { storageService } from './storage.service';
import { httpService } from './http.service';

// import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
// import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  saveLocalUser,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  getEmptyLoginCred,
  getEmptySignupCred,
};
window.userService = userService;

async function getUsers(filterBy = { txt: '' }) {
  return await httpService.get(`user`, filterBy);
  // let users = await storageService.query('user');
  // if (filterBy.txt) {
  //   const regex = new RegExp(filterBy.txt, 'i');
  //   users = users.filter((user) => regex.test(user.fullname));
  // }
  // console.log('users:', users);
  // return users;
}

async function getById(userId) {
  const user = await httpService.get(`user/${userId}`);
  // const user = await storageService.get('user', userId);

  // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

  return user;
}

function remove(userId) {
  return httpService.delete(`user/${userId}`);
  // return storageService.remove('user', userId);
}

async function update(userCred) {
  // const user = await storageService.get('user', user._id);
  // let user = getById(_id)
  // user = { ...user, userCred };
  // await storageService.put('user', user);

  const user = await httpService.put(`user/${userCred._id}`, userCred);

  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) saveLocalUser(user);

  return user;
}

async function login(userCred) {
  const user = await httpService.post('auth/login', userCred);
  if (user) {
    // socketService.login(user._id)
    return saveLocalUser(user);
  }
}

async function signup(userCred) {
  const user = await httpService.post('auth/signup', userCred);

  // socketService.login(user._id)
  return saveLocalUser(user);
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
  // socketService.logout()
  return await httpService.post('auth/logout');
}

function saveLocalUser(user) {
  user = {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
  };
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  saveLocalUser(user);

  return user;
}
function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}
function getEmptyLoginCred() {
  return {
    username: '',
    password: '',
  };
}
function getEmptySignupCred() {
  return {
    fullname: '',
    username: '',
    password: '',
    orders: '',
  };
}
