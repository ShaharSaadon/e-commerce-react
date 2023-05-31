import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { DynamicColors } from './DynamicColors';
import rightArrow from '../assets/images/svgs/right-arrow.svg'
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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

  const ColorButtonBuy = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: grey[700],
    borderRadius: '0',
    '&:hover': {
      backgroundColor: grey[500],
      border: '2px pink solid',
      boxShadow: '0 0 0 2px pink',

    },
  }));


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
          <div className="actions">
            {/* <Link to={`/product/edit/${product._id}`} className="edit">
              Edit
            </Link> */}
            <div className="btn-buy">
              <ColorButtonBuy variant="contained" onClick={handleAddToCart}>
                <img src={rightArrow} alt='הוסף לעגלה' />
                הוסף לעגלה
              </ColorButtonBuy>
            </div>
          </div>
        </div>
      </Link>

    </article >
  );
}
