import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadProducts, removeProduct, setFilterBy } from '../store/actions/product.actions'
import { ProductList } from '../components/ProductList.jsx'
import { ProductFilter } from '../components/ProductFilter.jsx'
import { NavLink } from 'react-router-dom';

export function ProductIndex() {

    const products = useSelector((storeState) => storeState.productModule.products)
    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setFilterBy({ category: '', name: '', price: 0 }));
        console.log('filterBy:', filterBy)
    }, []);


    useEffect(() => {
        document.title = 'KingSize | Shop';
        dispatch(loadProducts())
    }, [])


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

    if (!products) return <div>Loading...</div>
    return (
        <section className='products-container'>
            <div className="tools flex justify-center items-center">
                <NavLink exact="true" to="/product/edit" className="nav-link">Add Product</NavLink>
                {/* <ProductFilter filterBy={filterBy} onChangeFilter={onChangeFilter} /> */}

                {/* <Link to="/contact/edit" className="add-contact">Add contact</Link> */}
            </div>
            <ProductList products={products} onRemoveProduct={onRemoveProduct} />
        </section>)
}

