import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.local'
import { DynamicColors } from '../components/DynamicColors'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { Link, NavLink } from 'react-router-dom';

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
            // Set the initial selected color and size
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
        dispatch(addToCart({ ...product, quantity, sizes: selectedSize, colors: selectedColor }));
    };

    function handleColor(ev) {
        const color = ev.target.style.backgroundColor;
        setSelectedColor(color)
    }

    const handleSizeChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSize(selectedValue);
    };

    function onBack() {
        navigate(-1)
    }

    if (!product) return <div>Loading...</div>;
    const { name, description, category, price, imgURL, colors, subCategory, sizes } = product

    return (
        <section className='product-details'>
            <div className="header">
                <p><Link to={`/${category}`} className="nav-link">{category}</Link>
                    {subCategory ?
                        <Link to={`/${category}/${subCategory}`} className="nav-link">{subCategory}</Link>
                        :
                        ''} | {name} </p>

                <div className="nav">
                    <span>הקודם </span>
                    <span>הבא </span>
                </div>
            </div>
            <div className="content">
                <div className="img-container">
                    <img src={imgURL} className='square-ratio' />
                </div>
                <section className='product-info'>

                    <h1 className='product-name'>{name}</h1>
                    <p><span className='price'>{price}</span>&משלוח חינם - עד סוף חודש יוני</p>
                    <p className='description'>{description}</p>
                    <span>גודל</span>
                    <select className="sizes" onChange={handleSizeChange} value={selectedSize}>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span>צבעים</span>
                    <DynamicColors colors={colors || []} handleClick={handleColor} selectedColors={selectedColor}
                    />
                    <span>כמות</span>
                    <div className="quantity-container">
                        <button className='act' onClick={() => handleClick(-1)}>-</button>
                        <input type="number" className='quantity' value={quantity} />
                        <button className='act' onClick={() => handleClick(+1)}>+</button>
                    </div>
                    <button className='designed-btn' onClick={handleAddToCart}>Add to Cart</button>
                    {/* <button className='designed-btn' onClick={handleAddToCart}>Buy it Now</button> */}
                    {/* <button onClick={onBack} className="designed-btn">Back</button> */}
                </section>

            </div>

        </section>)
}
