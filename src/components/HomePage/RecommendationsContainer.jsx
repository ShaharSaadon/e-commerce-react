import React from 'react'
import { ProductPreview } from '../ProductPreview';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../store/actions/product.actions';
export function RecommendationsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'KingSize | דף הבית';
        dispatch(loadProducts());
    }, []);


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
