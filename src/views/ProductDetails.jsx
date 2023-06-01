import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service'
import { DynamicColors } from '../components/DynamicColors'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { Link, NavLink } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { ProductAccordion } from '../components/Accordion';
import { RecommendationsContainer } from '../components/HomePage/RecommendationsContainer';


export function ProductDetails({ setIsCartVisible }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')

    useEffect(() => {
        console.log('loading product...');
        loadProduct();
    }, [params.id]);


    async function loadProduct() {
        try {
            const product = await productService.getById(params.id);
            setProduct(product);

            if (product.colors && product.colors.length > 0) {
                setSelectedColor(product.colors[0]);
            }
            if (product.sizes && product.sizes.length > 0) {
                setSelectedSize(product.sizes[0]);
            }
        } catch (error) {
            console.log('error:', error);
        }

    }

    function handleClick(operator) {
        if (operator === -1) setQuantity(quantity - 1)
        else setQuantity(quantity + 1)
    }

    function handleAddToCart(ev) {
        ev.preventDefault()
        setIsCartVisible((prevState) => !prevState)
        dispatch(addToCart({
            ...product,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity
        }));
    };

    function handleColor(ev) {
        const color = ev.target.style.backgroundColor;
        setSelectedColor(color)
    }

    function handleSizeChange(event) {
        const selectedValue = event.target.value;
        setSelectedSize(selectedValue);
    };

    if (!product) return <div>Loading...</div>;
    const { name, description, category, price, imgURL, colors, subCategory, sizes } = product

    return (
        <section className='product-details'>
            <div className="header">
                <p><Link to={`/${category}`} className="nav-link">{category}</Link>
                    | {name} </p>

                <div className="nav">
                    <span>הקודם </span>
                    <span>הבא </span>
                </div>
            </div>
            <div className="content">
                <div className="img-container">
                    <img src={imgURL} className='square-ratio' />
                    <ProductAccordion />

                </div>
                <section className='product-info'>

                    <h1 className='product-name'>{name}</h1>
                    <p><span className='price'>{price}</span>&משלוח חינם - עד סוף חודש יוני</p>
                    <p className='description'>{description}</p>
                    <span>גודל</span>

                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">גודל</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={selectedSize}
                            label="Age *"
                            onChange={handleSizeChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {sizes.map((size, index) => (
                                <MenuItem value={size}>{size}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div className="details flex justify-between">
                        <div className="colors flex flex-column">
                            <span>צבעים</span>
                            <DynamicColors colors={colors || []} handleClick={handleColor} selectedColors={selectedColor}
                            />
                        </div>
                        <div className="quantity-container flex flex-column">
                            <span>כמות</span>
                            <div className="box">
                                <button className='act' onClick={() => handleClick(-1)}>-</button>
                                <input type="number" className='quantity' value={quantity} />
                                <button className='act' onClick={() => handleClick(+1)}>+</button>
                            </div>
                        </div>

                    </div>

                    <button className='designed-btn' onClick={handleAddToCart}>Add to Cart</button>
                    {/* <RecommendationsContainer /> */}

                    {/* <button className='designed-btn' onClick={handleAddToCart}>Buy it Now</button> */}
                    {/* <button onClick={onBack} className="designed-btn">Back</button> */}
                </section>

            </div>

        </section>)
}
