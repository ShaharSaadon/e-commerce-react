import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { DynamicColors } from './DynamicColors';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

  function handleColor(color) {
    setSelectedColor(color.label);
  }
  const ColorButtonBuy = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'inherit',
    borderRadius: '0',
    border: '1px solid black',
    '&:hover': {
      backgroundColor: grey[500],
    },
  }));


  return (
    <article className="product-preview flex">
      <div className="img-container">
        <Link to={`/product/${product._id}`} className="details">
          <img src={product.imgURL} className='square-ratio' alt={product.name} />
          <div className="box flex">
          </div>
          <h3>{product.name}</h3>
          <p> {product.shortDescription}</p>
          <p className='price'>{product.price.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}</p>
        </Link>
        <DynamicColors allColors={product.colors} handleClick={handleColor} selectedColor={selectedColor} />
        <div className="actions">
          {/* <Link to={`/product/edit/${product._id}`} className="edit">
                <img src={rightArrow} alt='הוסף לעגלה' />
              Edit
            </Link> */}
          <div className="btn-buy">
            <ColorButtonBuy variant="contained" onClick={handleAddToCart}>
              הוסף לעגלה
            </ColorButtonBuy>
          </div>
        </div>
      </div>

    </article >
  );
}
