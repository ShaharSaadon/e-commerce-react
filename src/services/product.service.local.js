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
  let productsToReturn = await storageService.query(STORAGE_KEY);
  if (!productsToReturn || productsToReturn.length === 0) {
    await postProducts();
    productsToReturn = await storageService.query(STORAGE_KEY);
  }
  console.log(filterBy);
  if (filterBy) {
    var { category, maxPrice, name } = filterBy;

    productsToReturn = gProducts.filter(
      (product) =>
        product.category.toLowerCase().includes(category.toLowerCase()) &&
        product.name.toLowerCase().includes(name.toLowerCase()) &&
        product.price <= maxPrice
    );
  }
  return productsToReturn;
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
    Name: 'Example Product',
    Description: 'This is an example product with all attributes.',
    Category: 'Electronics',
    Subcategory: 'Smartphones',
    Brand: 'ExampleBrand',
    Model: 'ExampleModel',
    SKU: 'EX12345',
    UPC: '0123456789012',
    EAN: '0123456789012',
    Color: 'Black',
    Size: '6.1 inches',
    Material: 'Aluminum',
    Weight: '150 grams',
    Dimensions: {
      length: '150 mm',
      width: '70 mm',
      height: '8 mm',
    },
    Price: 999.99,
    Currency: 'ILS',
    Availability: 'In Stock',
    Warranty: '1 Year Manufacturer Warranty',
    Rating: 4.5,
    ReviewCount: 250,
    ImageURL: 'https://example.com/images/example_product.jpg',
    ThumbnailURL:
      'https://example.com/images/thumbnails/example_product_thumbnail.jpg',
    GalleryImages: [
      'https://example.com/images/gallery/example_product_1.jpg',
      'https://example.com/images/gallery/example_product_2.jpg',
    ],
    Features: [
      'High-resolution display',
      'Long-lasting battery life',
      'Fast processor',
    ],
    Specifications: [
      'Screen Size: 6.1 inches',
      'Battery Capacity: 4000mAh',
      'Processor: Octa-core 2.8GHz',
    ],
    PackageContents: ['Example Product', 'Charging cable', 'User manual'],
    Keywords: ['example product', 'smartphone', 'electronics'],
  };
}
