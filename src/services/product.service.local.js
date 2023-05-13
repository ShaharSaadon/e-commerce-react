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
    name: 'Feathered Dreams Pillow',
    description:
      '100% pure goose down filling. Breathable cotton cover. Hypoallergenic and dust mite resistant. Medium-firm support. Piped edges for durability. Machine washable. 850 fill power.',
    category: 'pillows',
    colors: ['white'],
    price: 79.99,
    imgURL: 'https://robohash.org/2',
  },
  {
    _id: '1003',
    name: 'Satin Elegance Sheet Set',
    description:
      '100% pure mulberry silk. Hypoallergenic and gentle on the skin. Silky smooth and lustrous finish. Temperature regulating properties. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Queen and King sizes.',
    category: 'linen',
    colors: ['silver'],
    price: 299.99,
    imgURL: 'https://robohash.org/3',
  },
  {
    _id: '1004',
    name: 'Luxe Cashmere Blanket',
    description:
      '100% premium cashmere wool. Ultra-soft and warm. Lightweight and breathable. Elegant twill weave pattern. Hand-finished with a fringe trim. Dry clean only.',
    category: 'blankets',
    colors: ['beige'],
    price: 399.99,
    imgURL: 'https://robohash.org/4',
  },
  {
    _id: '1005',
    name: 'Organic Bamboo Towel Set',
    description:
      '70% organic bamboo, 30% cotton blend. Soft, absorbent, and eco-friendly. Odor-resistant and antibacterial properties. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 600 GSM.',
    category: 'towels',
    colors: ['green'],
    price: 89.99,
    imgURL: 'https://robohash.org/5',
  },
  {
    _id: '1006',
    name: 'Cool Gel Memory Foam Pillow',
    description:
      'Memory foam with cooling gel layer. Medium-firm support. Ventilated for increased airflow and breathability. Removable, washable cover. Contours to the shape of your head and neck.',
    category: 'pillows',
    colors: ['blue'],
    price: 59.99,
    imgURL: 'https://robohash.org/6',
  },
  {
    _id: '1007',
    name: 'Jersey Knit Sheet Set',
    description:
      '100% pure combed cotton. Soft, stretchy, and breathable. T-shirt-like comfort. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'linen',
    colors: ['gray'],
    price: 79.99,
    imgURL: 'https://robohash.org/7',
  },
  {
    _id: '1008',
    name: 'Faux Fur Throw Blanket',
    description:
      '100% polyester faux fur. Luxuriously soft and warm. Realistic animal fur pattern. Perfect for snuggling or as a decorativeaccent. Machine washable. Size: 50" x 60".',
    category: 'blankets',
    colors: ['brown'],
    price: 49.99,
    imgURL: 'https://robohash.org/8',
  },
  {
    _id: '1009',
    name: 'Plush Microfiber Towel Set',
    description:
      '100% ultra-soft microfiber. Quick-drying and highly absorbent. Lint-free and fade-resistant. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 550 GSM.',
    category: ['towels'],
    colors: 'navy',
    price: 69.99,
    imgURL: 'https://robohash.org/9',
  },
  {
    _id: '1010',
    name: 'Lavender Infused Pillow',
    description:
      'Memory foam with lavender infusion. Calming lavender scent for better sleep. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'pillows',
    colors: ['purple'],
    price: 64.99,
    imgURL: 'https://robohash.org/10',
  },
  {
    _id: '1011',
    name: 'Flannel Sheet Set',
    description:
      'Memory foam with lavender infusion. Calming lavender scent for better sleep. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'linen',
    colors: ['red'],
    price: 89.99,
    imgURL: 'https://robohash.org/11',
  },
  {
    _id: '1012',
    name: 'Waffle Weave Cotton Blanket',
    description:
      '100% pure combed cotton. Breathable and lightweight. Waffle weave pattern for added texture. Perfect for all seasons. Machine washable. Size: 66" x 90" (Twin), 90" x 90" (Queen), 108" x 90" (King).',
    category: 'blankets',
    colors: ['ivory'],
    price: 59.99,
    imgURL: ' https://robohash.org/12',
  },
  {
    _id: '1013',
    name: 'Diamond Jacquard Towel Set',
    description:
      '100% long-staple cotton. Soft, absorbent, and durable. Elegant diamond jacquard pattern. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 700 GSM.',
    category: 'towels',
    colors: ['taupe'],
    price: 79.99,
    imgURL: 'https://robohash.org/13',
  },
  {
    _id: '1014',
    name: 'Charcoal Infused Pillow',
    description:
      'Memory foam with activated charcoal infusion. Odor-neutralizing and moisture-absorbing. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'pillows',
    colors: ['black'],
    price: 64.99,
    imgURL: 'https://robohash.org/14',
  },
  {
    _id: '1015',
    name: 'Percale Sheet Set',
    description:
      '100% pure long-staple cotton. Crisp, cool, and breathable. Matte finish with a soft hand feel. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'linen',
    colors: ['blue'],
    price: 99.99,
    imgURL: 'https://robohash.org/15',
  },
  {
    _id: '1016',
    name: 'Chenille Knit Blanket',
    description:
      '100% polyester chenille knit. Ultra-soft and plush texture. Warm and cozy. Ideal for layering or as a standalone blanket. Machine washable.',
    category: 'blankets',
    colors: ['pink'],
    price: 39.99,
    imgURL: 'https://robohash.org/16',
  },
  {
    _id: '1017',
    name: 'Turkish Cotton Towel Set',
    description:
      '100% genuine Turkish cotton. Luxurious, soft, and absorbent. Long-lasting and quick-drying. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 650 GSM.',
    category: 'towels',
    colors: ['coral'],
    price: 109.99,
    imgURL: 'https://robohash.org/17',
  },
  {
    _id: '1018',
    name: 'Copper Infused Pillow',
    description:
      'Memory foam with copper-infused cover. Antibacterial and antimicrobial properties. Medium-firm support. Removable, washable cover. Contours to the shape of your head and neck. Size: 24" x 16" x 5".',
    category: 'pillows',
    colors: ['copper'],
    price: 69.99,
    imgURL: 'https://robohash.org/18',
  },
  {
    _id: '1019',
    name: 'Sateen Sheet Set',
    description:
      '100% pure long-staple cotton. Smooth, lustrous, and wrinkle-resistant. Silky soft feel with a subtle sheen. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Available in Twin, Full, Queen, and King sizes. Machine washable.',
    category: 'linen',
    colors: ['gold'],
    price: 119.99,
    imgURL: 'https://robohash.org/19',
  },
  {
    _id: '1020',
    name: 'Quilted Velvet Blanket',
    description:
      '100% polyester quilted velvet. Soft, warm, and luxurious. Diamond quilted pattern. Ideal for layering or as a standalone blanket. Machine washable.',
    category: 'blankets',
    colors: ['burgundy'],
    price: 69.99,
    imgURL: 'https://robohash.org/20',
  },
  {
    _id: '1021',
    name: 'Beach Stripe Towel Set',
    description:
      '100% pure cotton. Soft, absorbent, and durable. Classic beach stripe design. Includes 2 bath towels, 2 hand towels, and 2 washcloths. Machine washable. 500 GSM.',
    category: 'towels',
    colors: ['blue', 'white'],
    price: 59.99,
    imgURL: 'https://robohash.org/21',
  },
];

async function query(filterBy) {
  let updatedProducts = await storageService.query(STORAGE_KEY);
  if (!updatedProducts || updatedProducts.length === 0) {
    await postProducts();
    updatedProducts = await storageService.query(STORAGE_KEY);
  }
  var { category, minMaxPrice, name, colors } = filterBy;

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
  if (minMaxPrice) {
    console.log('minMaxPrice:', minMaxPrice);
    updatedProducts = updatedProducts.filter(
      (product) =>
        product.price >= minMaxPrice[0] && product.price <= minMaxPrice[1]
    );
  }
  if (colors) {
    // updatedProducts = updatedProducts.filter((product) =>
    //   colors.some((color) => product.colors.includes(color))
    // );
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
