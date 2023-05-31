import React from 'react'
import { ProductPreview } from '../components/ProductPreview';
import { useSelector } from 'react-redux';

export function RecommendationsContainer() {
    const products = useSelector((storeState) =>
        storeState.productModule.products.slice(0, 3)
    );
    return (
        <div className='recommends-container'>
            <h2>ההמלצות שלנו</h2>
            <p>אנחנו בטוחים שתאהבו את זה</p>
            <div className='recommends clean-list'>
                {products.map((product) => (
                    <li key={product._id} className='product-container'>
                        <ProductPreview product={product} />
                    </li>
                ))}
            </div>
        </div>
    )
}
