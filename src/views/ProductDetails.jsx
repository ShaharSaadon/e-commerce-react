import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.local'

export function ProductDetails(props) {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

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

    function onBack() {
        navigate('/shop')
    }

    if (!product) return <div>Loading...</div>;
    console.log('product:', product)
    return (
        <section className='product-details'>
            <button onClick={onBack} className="btn-back">Back</button>
            <img src={product.imgURL} />
            <section>
                <h1>name: {product.name}</h1>
            </section>
            <section>
                <p>Description: {product.description}</p>
            </section>
            <section>
                <p>Category: {product.category}</p>
            </section>
            <section>
                <p>Price: {product.price} {product.Currency} </p>
            </section>
            <section>
                <p>Color: {product.colors}</p>
            </section>

        </section>)
}
