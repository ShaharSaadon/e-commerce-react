import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { showSuccess } from '../services/alert.message'
import { DynamicColors } from './DynamicColors';
import rightArrow from '../assets/images/svgs/right-arrow.svg'
export function ProductPreview({ product, onRemoveProduct }) {
  const dispatch = useDispatch();

  const handleAddToCart = (ev) => {
    ev.preventDefault()
    dispatch(addToCart(product));
    showSuccess('Product Added successfully')
  };

  console.log('products.colors:', product.colors)
  return (
    <article className="product-preview flex">
      <Link to={`/product/${product._id}`} className="details">
        <img src={product.imgURL} className='square-ratio' />
        <div className="box flex">
          <h3>{product.name}</h3>
          {/* <p className='description'>{product.description}</p> */}
          <p> Lorem ipsum dolor sit amet consectetur.</p>
          <p className='price'>{product.price} ILS</p>
          <DynamicColors colors={[...product.colors]} />

        </div>
        <div className="actions">
          <Link to={`/product/edit/${product._id}`} className="edit">
            Edit
          </Link>
          <button onClick={handleAddToCart}>
            ADD TO CART
            <img src={rightArrow} alt="" />
          </button>
          {/* <button
            onClick={() => onRemoveProduct(product._id)}
            className="btn-delete"
          >
          Delete
        </button> */}
        </div>
      </Link>
    </article >
  );
}
