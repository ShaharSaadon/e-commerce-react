import React, { useEffect } from 'react'
import { loadProducts, setFilterBy } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { useHistory } from 'react-router-dom';

export function DynamicProducts({ category }) {

    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)
    const products = useSelector((storeState) => storeState.productModule.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilterBy({ category, name: '', price: 0, }))
        dispatch(loadProducts())
        return () => {
            console.log('clear the filter BY...', filterBy)
            dispatch(setFilterBy({ category: '', name: '', price: 0 }));
        }
    }, [category])

    return (
        <section>
            <h2>{category}</h2>

            <ProductList products={products} />
        </section>

    )
}
