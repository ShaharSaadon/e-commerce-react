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
    _id: '1002',
    name: 'Hand Towel',
    description:
      '100% pure goose down filling. Breathable cotton cover. Hypoallergenic and dust mite resistant. Medium-firm support. Piped edges for durability. Machine washable. 850 fill power.',
    category: 'מצעים',
    subCategory: 'hand-towel',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['white'],
    price: 79.99,
    imgURL: 'https://robohash.org/2',
  },
  {
    _id: '1003',
    name: 'Body Towel',
    description:
      '100% pure mulberry silk. Hypoallergenic and gentle on the skin. Silky smooth and lustrous finish. Temperature regulating properties. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Queen and King sizes.',
    category: 'מארזים',
    subCategory: 'body-towel',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['silver'],
    price: 299.99,
    imgURL: 'https://robohash.org/3',
  },
  {
    _id: '1004',
    name: 'Face Towel',
    description:
      '100% premium cashmere wool. Ultra-soft and warm. Lightweight and breathable. Elegant twill weave pattern. Hand-finished with a fringe trim. Dry clean only.',
    category: 'מוצרים-משלימים-למיטה',
    subCategory: 'face-towel',
    sizes: ['100/140', '120/200', '70/130'],
    colors: ['beige'],
    price: 399.99,
    imgURL: 'https://robohash.org/4',
  },
  {
    _id: '1005',
    name: '100% Cotton linen',
    description:
      '70% organic bamboo, 30% cotton blend. Soft, absorbent, and eco-friendly. Odor-resistant and antibacterial properties. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 600 GSM.',
    category: 'מארזים',
    subCategory: 'cotton-linen',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['מוצרים-משלימים-למיטה-משלימים-למיטה-משלימים-למיטה'],
    price: 89.99,
    imgURL: 'https://robohash.org/5',
  },
  {
    _id: '1006',
    name: 'baby linen',
    description:
      'Memory foam with cooling gel layer. Medium-firm support. Ventilated for increased airflow and breathability. Removable, washable cover. Contours to the shape of your head and neck.',
    category: 'מגבות',
    subCategory: 'baby-linen',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['blue'],
    price: 59.99,
    imgURL: 'https://robohash.org/6',
  },
  {
    _id: '1007',
    name: 'Couple Linen',
    description:
      '100% pure combed cotton. Soft, stretchy, and breathable. T-shirt-like comfort. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'מארזים',
    colors: ['gray'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 79.99,
    imgURL: 'https://robohash.org/7',
  },
  {
    _id: '1008',
    name: 'Faux Fur Throw Blanket',
    description:
      '100% polyester faux fur. Luxuriously soft and warm. Realistic animal fur pattern. Perfect for snuggling or as a decorativeaccent. Machine washable. Size: 50" x 60".',
    category: 'מצעים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['brown'],
    price: 49.99,
    imgURL: 'https://robohash.org/8',
  },
  {
    _id: '1009',
    name: 'Plush Microfiber Towel Set',
    description:
      '100% ultra-soft microfiber. Quick-drying and highly absorbent. Lint-free and fade-resistant. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 550 GSM.',
    category: 'מגבות',
    colors: ['navy'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 69.99,
    imgURL: 'https://robohash.org/9',
  },
  {
    _id: '1010',
    name: 'Lavender Infused Pillow',
    description:
      'Memory foam with lavender infusion. Calming lavender scent for better sleep. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'מגבות',
    colors: ['purple'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 64.99,
    imgURL: 'https://robohash.org/10',
  },
  {
    _id: '1011',
    name: 'Flannel Sheet Set',
    description:
      'Memory foam with lavender infusion. Calming lavender scent for better sleep. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'מצעים',
    colors: ['red'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],

    price: 89.99,
    imgURL: 'https://robohash.org/11',
  },
  {
    _id: '1012',
    name: 'Waffle Weave Cotton Blanket',
    description:
      '100% pure combed cotton. Breathable and lightweight. Waffle weave pattern for added texture. Perfect for all seasons. Machine washable. Size: 66" x 90" (Twin), 90" x 90" (Queen), 108" x 90" (King).',
    category: 'מצעים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],

    colors: ['ivory'],
    price: 59.99,
    imgURL: ' https://robohash.org/12',
  },
  {
    _id: '1013',
    name: 'Diamond Jacquard Towel Set',
    description:
      '100% long-staple cotton. Soft, absorbent, and durable. Elegant diamond jacquard pattern. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 700 GSM.',
    category: 'מגבות',
    colors: ['taupe'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],

    price: 79.99,
    imgURL: 'https://robohash.org/13',
  },
  {
    _id: '1014',
    name: 'Charcoal Infused Pillow',
    description:
      'Memory foam with activated charcoal infusion. Odor-neutralizing and moisture-absorbing. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'מגבות',
    colors: ['black'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],

    price: 64.99,
    imgURL: 'https://robohash.org/14',
  },
  {
    _id: '1015',
    name: 'Percale Sheet Set',
    description:
      '100% pure long-staple cotton. Crisp, cool, and breathable. Matte finish with a soft hand feel. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'מצעים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],

    colors: ['blue'],
    price: 99.99,
    imgURL: 'https://robohash.org/15',
  },
  {
    _id: '1016',
    name: 'Chenille Knit Blanket',
    description:
      '100% polyester chenille knit. Ultra-soft and plush texture. Warm and cozy. Ideal for layering or as a standalone blanket. Machine washable.',
    category: 'מצעים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['pink'],
    price: 39.99,
    imgURL: 'https://robohash.org/16',
  },
  {
    _id: '1017',
    name: 'Turkish Cotton Towel Set',
    description:
      '100% genuine Turkish cotton. Luxurious, soft, and absorbent. Long-lasting and quick-drying. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 650 GSM.',
    category: 'מארזים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['coral'],
    price: 109.99,
    imgURL: 'https://robohash.org/17',
  },
  {
    _id: '1018',
    name: 'Copper Infused Pillow',
    description:
      'Memory foam with copper-infused cover. Antibacterial and antimicrobial properties. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'מגבות',
    colors: ['copper'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 69.99,
    imgURL: 'https://robohash.org/18',
  },
  {
    _id: '1019',
    name: 'Sateen Sheet Set',
    description:
      '100% pure long-staple cotton. Smooth, lustrous, and wrinkle-resistant. Silky soft feel with a subtle sheen. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'מארזים',
    colors: ['gold'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 119.99,
    imgURL: 'https://robohash.org/19',
  },
  {
    _id: '1020',
    name: 'Quilted Velvet Blanket',
    description:
      '100% polyester quilted velvet. Soft, warm, and luxurious. Diamond quilted pattern. Ideal for layering or as a standalone blanket. Machine washable.',
    category: 'מצעים',
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    colors: ['burgundy'],
    price: 69.99,
    imgURL: 'https://robohash.org/20',
  },
  {
    _id: '1021',
    name: 'Beach Stripe Towel Set',
    description:
      '100% pure cotton. Soft, absorbent, and durable. Classic beach stripe design. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 500 GSM.',
    category: 'מצעים',
    colors: ['blue', 'white'],
    sizes: ['100/140', '120/200', '30/30', '60/60'],
    price: 59.99,
    imgURL: 'https://robohash.org/21',
  },
];

async function query(category) {
  let updatedProducts = await storageService.query(STORAGE_KEY);
  if (!updatedProducts || updatedProducts.length === 0) {
    await _postProducts();
    updatedProducts = await storageService.query(STORAGE_KEY);
  }
  console.log('category:', category);
  if (category) {
    const regex = new RegExp(category, 'i');
    updatedProducts = updatedProducts.filter((product) =>
      regex.test(product.category)
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

async function _postProducts() {
  for (let i = 0; i < gProducts.length; i++) {
    await storageService.post(STORAGE_KEY, gProducts[i]);
  }
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
