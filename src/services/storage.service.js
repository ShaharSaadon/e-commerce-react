const CART_KEY = 'cart';

function saveCart(cart) {
  store(CART_KEY, cart);
}

function loadCart() {
  return load(CART_KEY, []);
}

function store(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
  const value = localStorage[key];
  if (!value) {
    return defaultValue;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error parsing JSON data for key "${key}":`, error);
    return defaultValue;
  }
}
export const storageService = {
  store,
  load,
  saveCart,
  loadCart,
};
