import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.local'
import { DynamicColors } from '../components/DynamicColors'
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
    const { name, description, category, price, imgURL, colors } = product
    return (
        <section className='product-details'>
            <img src={imgURL} />
            <section>
                <h1>{name}</h1>
                <p>{price} ₪</p>
                <p>{description}</p>
                <p>Colors:</p>
                <DynamicColors colors={colors || []}
                />
                <p>Quantity</p>
                <input type="text" />
                <button>Add to Cart</button>
            </section>

            <button onClick={onBack} className="btn-back">Back</button>


        </section>)
}
