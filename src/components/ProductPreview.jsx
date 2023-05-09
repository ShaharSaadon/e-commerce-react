import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';

export function ProductPreview({ product, onRemoveProduct }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-preview">
      <img src={product.imgURL} />
      <Link to={`/product/${product._id}`} className="info">
        <div className="box">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>Price: {product.price}</p>
          <p>Color: {product.color}</p>

        </div>
      </Link>
      <div className="actions">
        <Link to={`/product/edit/${product._id}`} className="edit">
          Edit
        </Link>
        <Link to={`/product/${product._id}`} className="details">
          Details
        </Link>
        <button onClick={handleAddToCart}>Add to Cart</button>

        <button
          onClick={() => onRemoveProduct(product._id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
