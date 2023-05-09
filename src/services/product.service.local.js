import { storageService } from './async-storage.service.js';

export const productService = {
  query,
  save,
  remove,
  getById,
  getEmptyProduct,
};
const STORAGE_KEY = 'products';
const gProducts = [
  {
    _id: '1001',
    name: 'Product A',
    description: 'This is Product A description.',
    category: 'Electronics',
    color: 'Silver',
    price: 1199.99,
    imgURL: `https://robohash.org/1`,
  },
  {
    _id: '1002',
    name: 'Product B',
    description: 'This is Product B description.',
    category: 'Electronics',
    color: 'Black',
    price: 499.99,
    imgURL: `https://robohash.org/2`,
  },
  {
    _id: '1003',
    name: 'Product C',
    description: 'This is Product C description.',
    category: 'Electronics',
    color: 'White',
    price: 99.99,
    imgURL: `https://robohash.org/3`,
  },
  {
    _id: '1004',
    name: 'Product D',
    description: 'This is Product D description.',
    category: 'Electronics',
    color: 'Red',
    price: 249.99,
    imgURL: `https://robohash.org/4`,
  },
];

async function query(filterBy) {
  let updatedProducts = await storageService.query(STORAGE_KEY);
  if (!updatedProducts || updatedProducts.length === 0) {
    await postProducts();
    updatedProducts = await storageService.query(STORAGE_KEY);
  }

  var { category, maxPrice, name } = filterBy;

  if (category) {
    const regex = new RegExp(category, 'i');
    updatedProducts = updatedProducts.filter((product) =>
      regex.test(product.category)
    );
  }
  if (name) {
    const regex = new RegExp(name, 'i');
    updatedProducts = updatedProducts.filter((product) =>
      regex.test(product.name)
    );
  }
  if (maxPrice) {
    updatedProducts = updatedProducts.filter(
      (product) => product.price <= maxPrice
    );
  }

  return updatedProducts;
}

async function getById(productId) {
  // console.log('id type:', typeof id, 'id value:', id);
  // const product = gProducts.find((product) => {
  //   console.log(
  //     'product id type:',
  //     typeof product._id,
  //     'product id value:',
  //     product._id
  //   );
  //   return product._id === id;
  // });
  // console.log('product found:', product);
  // return Promise.resolve({ ...product });
  console.log('productId:', productId);
  return await storageService.get(STORAGE_KEY, productId);
}

async function remove(productId) {
  // const idx = gProducts.findIndex((product) => product._id === id);
  // gProducts.splice(idx, 1);
  // if (!gProducts.length) gProducts = gDefaultProducts.slice();
  // storageService.store(STORAGE_KEY, gProducts);
  // return Promise.resolve();
  console.log('productId:', productId);
  return await storageService.remove(STORAGE_KEY, productId);
}

async function save(product) {
  // if (productToSave._id) {
  //   const idx = gProducts.findIndex(
  //     (product) => product._id === productToSave._id
  //   );
  //   gProducts.splice(idx, 1, productToSave);
  // } else {
  //   productToSave._id = makeId();
  //   productToSave.batteryStatus = 100;
  //   gProducts.push(productToSave);
  // }
  // storageService.store(STORAGE_KEY, gProducts);
  // return Promise.resolve(productToSave);
  var savedProduct;
  if (product._id) {
    savedProduct = await storageService.put(STORAGE_KEY, product);
  } else {
    savedProduct = await storageService.post(STORAGE_KEY, product);
  }

  return savedProduct;
}

async function postProducts() {
  await storageService.post(STORAGE_KEY, gProducts[0]);
  await storageService.post(STORAGE_KEY, gProducts[1]);
  await storageService.post(STORAGE_KEY, gProducts[2]);
  await storageService.post(STORAGE_KEY, gProducts[3]);
}

function getEmptyProduct() {
  return {
    _id: '',
    name: '',
    description: '',
    category: '',
    price: 0,
  };
}
