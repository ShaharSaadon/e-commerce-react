import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadProducts, removeProduct, setFilterBy } from '../store/actions/product.actions'
import { ProductList } from '../components/ProductList.jsx'
import { ProductFilter } from '../components/ProductFilter.jsx'

export function ProductIndex() {
    const products = useSelector((storeState) => storeState.productModule.products)
    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)

    const dispatch = useDispatch()


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
                <ProductFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
                {/* <Link to="/contact/edit" class="add-contact">Add contact</Link> */}
            </div>
            <ProductList products={products} onRemoveProduct={onRemoveProduct} />
        </section>)
}

