import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.local'
import { DynamicColors } from '../components/DynamicColors'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';
import { showSuccess } from '../services/alert.message';

export function ProductDetails(props) {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const [quauntity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClick(operator) {
        console.log('ev:', operator)
        if (operator === -1) setQuantity(quauntity - 1)
        else setQuantity(quauntity + 1)
    }
    useEffect(() => {
        console.log('loading product...');
        loadProduct();
    }, [params.id]);

    async function loadProduct() {
        try {
            console.log('params.id:', params.id)
            const product = await productService.getById(params.id);
            console.log('product:', product)
            setProduct(product);
        } catch (error) {
            console.log('error:', error);
        }
    }

    const handleAddToCart = (ev) => {
        ev.preventDefault()
        dispatch(addToCart(product));
        showSuccess('Product Added successfully')
    };



    function onBack() {
        navigate('/shop')
    }

    if (!product) return <div>Loading...</div>;
    const { name, description, category, price, imgURL, colors, subCategory } = product
    console.log('product:', product)
    console.log('subCategory:', subCategory)
    return (
        <section className='product-details'>
            <img src={imgURL} className='square-ratio' />
            <section className='product-info'>
                <h2>Home | {category} | {subCategory ? subCategory : ''} | {name} </h2>
                <h1 className='product-name'>{name}</h1>
                <p><span className='price'>{price}</span>&Free Shipping</p>
                <p className='description'>{description}</p>
                <p>Colors:</p>
                <DynamicColors colors={colors || []}
                />
                <p>Quantity</p>
                <div className="quantity-container">
                    <button className='act' onClick={() => handleClick(-1)}>-</button>
                    <input type="number" className='quantity' value={quauntity} />
                    <button className='act' onClick={() => handleClick(+1)}>+</button>
                </div>
                <button className='designed-btn' onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={onBack} className="designed-btn">Back</button>
            </section>



        </section>)
}
