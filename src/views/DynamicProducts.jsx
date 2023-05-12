import React, { useCallback, useEffect } from 'react'
import { loadProducts, removeProduct, setFilterBy } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { useHistory } from 'react-router-dom';
import { ProductFilter } from '../components/ProductFilter'
export function DynamicProducts({ category }) {

    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)
    const products = useSelector((storeState) => storeState.productModule.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilterBy({ category, name: '', price: 0, }))
        dispatch(loadProducts())
        return () => {
            dispatch(setFilterBy({ category: '', name: '', price: 0 }));
        }
    }, [category])


    const onRemoveProduct = useCallback(async (productId) => {
        try {
            dispatch(removeProduct(productId));
        } catch (error) {
            console.log('error:', error);
        }
    }, []);

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadProducts())
    }

    return (
        <section className='main-dynamic-content'>
            <div className="teaser-container">
                <h2>{category}</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
            </div>
            <div className="product-list-container">
                <ProductList products={products} onRemoveProduct={onRemoveProduct} />
            </div>
            <div className="filter-container">
                <ProductFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
            </div>
        </section>

    )
}
