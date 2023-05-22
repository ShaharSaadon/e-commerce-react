import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { DynamicColors } from './DynamicColors';
import rightArrow from '../assets/images/svgs/right-arrow.svg'
export function ProductPreview({ product, onRemoveProduct, setIsCartVisible }) {
  const dispatch = useDispatch();

  const handleAddToCart = (ev) => {
    ev.preventDefault()
    setIsCartVisible((prevState) => !prevState)
    dispatch(addToCart(product));
  };

  return (
    <article className="product-preview flex">
      <Link to={`/product/${product._id}`} className="details">
        <div className="img-container">
          <img src={product.imgURL} className='square-ratio' />
        </div>

        <div className="box flex">
          <h3>{product.name}</h3>
          <p> Lorem ipsum dolor sit amet consectetur.</p>
          <p className='price'>{product.price} ILS</p>
          <DynamicColors colors={[...product.colors]} selectedColors={[product.colors[0]]} />

        </div>
        <div className="actions">
          {/* <Link to={`/product/edit/${product._id}`} className="edit">
            Edit
          </Link> */}
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
