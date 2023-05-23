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
  // let users = await storageService.query('user');
  // if (filterBy.txt) {
  //   const regex = new RegExp(filterBy.txt, 'i');
  //   users = users.filter((user) => regex.test(user.fullname));
  // }
  // console.log('users:', users);
  // return users;
  return await httpService.get(`user`, filterBy);
}

async function getById(userId) {
  // const user = await storageService.get('user', userId);
  const user = await httpService.get(`user/${userId}`);

  // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

  return user;
}

function remove(userId) {
  // return storageService.remove('user', userId);
  return httpService.delete(`user/${userId}`);
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
  saveCookieUser(user);

  return user;
}

function saveCookieUser(user) {
  user = {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
  };

  storageService.store(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));

  return user;
}
function getLoggedinUser() {
  // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
  return storageService.load('loggedinUser');
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

window.loadUsers = loadUsers;
async function loadUsers() {
  const users = [
    {
      _id: 'u100',
      fullname: 'Shahar Saadon',
      username: 'shahar',
      password: 'shahar',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588778/shahar_wnnnux.png',
    },
    {
      _id: 'u101',
      fullname: 'Ido Peri',
      username: 'ido',
      password: 'ido',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588729/ido_wqplye.png',
    },
    {
      _id: 'u102',
      fullname: 'Tomer Huberman',
      username: 'tomer',
      password: 'tomer',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588803/tomer_wm04gf.png',
    },
    {
      _id: 'u103',
      fullname: 'Puki Ka',
      username: 'puki',
      password: 'puki',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588803/tomer_wm04gf.png',
    },
    {
      _id: 'u104',
      fullname: 'Muki Ka',
      username: 'muki',
      password: 'muki',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588778/shahar_wnnnux.png',
    },
    {
      _id: 'u105',
      fullname: 'Ido Da',
      username: 'da',
      password: 'da',
      imgURL:
        'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588729/ido_wqplye.png',
    },
  ];

  await userService.signup(users[0]);
  await userService.signup(users[2]);
  await userService.signup(users[3]);
  await userService.signup(users[4]);
  await userService.signup(users[5]);
  await userService.signup(users[1]);
}

// ;(async () => {
//   const user = await storageService.query('user')
//   // console.log("users: ", users);
//   if (user.length) return
//   const users = [
//     {
//       _id: 'u100',
//       fullname: 'Shahar Saadon',
//       username: 'shahar',
//       password: 'shahar',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588778/shahar_wnnnux.png',
//     },
//     {
//       _id: 'u101',
//       fullname: 'Ido Peri',
//       username: 'ido',
//       password: 'ido',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588729/ido_wqplye.png',
//     },
//     {
//       _id: 'u102',
//       fullname: 'Tomer Huberman',
//       username: 'tomer',
//       password: 'tomer',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588803/tomer_wm04gf.png',
//     },
//     {
//       _id: 'u103',
//       fullname: 'Puki Ka',
//       username: 'puki',
//       password: 'puki',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588803/tomer_wm04gf.png',
//     },
//     {
//       _id: 'u104',
//       fullname: 'Muki Ka',
//       username: 'muki',
//       password: 'muki',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588778/shahar_wnnnux.png',
//     },
//     {
//       _id: 'u105',
//       fullname: 'Ido Da',
//       username: 'da',
//       password: 'da',
//       imgURL: 'https://res.cloudinary.com/dbf0uxszt/image/upload/v1679588729/ido_wqplye.png',
//     },
//   ]
//   await signup(users[0])
//   await signup(users[2])
//   await signup(users[3])
//   await signup(users[4])
//   await signup(users[5])
//   await signup(users[1])
// })()
