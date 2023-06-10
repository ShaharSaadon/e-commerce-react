import React, { useEffect } from 'react'
import { loadProducts } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { Link, useParams } from 'react-router-dom'
import { linkService } from '../services/link.service';
import PropTypes from 'prop-types';


export function DynamicProducts({ setIsCartVisible = { setIsCartVisible } }) {
    const products = useSelector((storeState) => storeState.productModule.products)
    const { imageMap } = linkService
    const { category } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const formattedCategory = category.replace(/-/g, ' ');
        console.log('formattedCategory:', formattedCategory)
        document.title = `KingSize | ${formattedCategory}`;
        dispatch(loadProducts(category))
    }, [category])

    return (
        <section className='main-dynamic-content full'>
            <div className="teaser-container full"
                style={{ backgroundImage: `url(${imageMap[category]})` }}>
                <h2 className='category-title'>
                    <Link to={`/${category}`} className="nav-link">{category.replace(/-/g, ' ')}</Link>
                </h2>
                <p className='category-description'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
            </div>
            <div className="product-list-container">
                <ProductList products={products} setIsCartVisible={setIsCartVisible} />
            </div>
        </section>

    )
}

DynamicProducts.propTypes = {
    setIsCartVisible: PropTypes.func.isRequired,
}