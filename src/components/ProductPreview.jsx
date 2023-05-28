import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { DynamicColors } from './DynamicColors';
import rightArrow from '../assets/images/svgs/right-arrow.svg'
export function ProductPreview({ product, setIsCartVisible }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0])

  function handleAddToCart(ev) {
    setIsCartVisible((prevState) => !prevState)
    dispatch(addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    }));

  };

  function handleColor(ev) {
    ev.preventDefault()
    const color = ev.target.style.backgroundColor;
    setSelectedColor(color)
  }


  return (
    <article className="product-preview flex">
      <Link to={`/product/${product._id}`} className="details">
        <div className="img-container">
          <img src={product.imgURL} className='square-ratio' alt={product.name} />
        </div>
        <div className="box flex">
          <h3>{product.name}</h3>
          <p> {product.shortDescription}</p>
          <p className='price'>{product.price.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}</p>
          <DynamicColors colors={[...product.colors]} handleClick={handleColor} selectedColors={selectedColor} />

        </div>
      </Link>
      <div className="actions">
        <Link to={`/product/edit/${product._id}`} className="edit">
          Edit
        </Link>
        <button onClick={handleAddToCart}>
          ADD TO CART
          <img src={rightArrow} alt='הוסף לעגלה' />
        </button>

      </div>
    </article >
  );
}
