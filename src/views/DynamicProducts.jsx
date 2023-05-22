import React, { useCallback, useEffect } from 'react'
import { loadProducts, removeProduct } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { Link, useParams } from 'react-router-dom'
import bCover from '../assets/images/DynamicProducts/bedding-cover.jpg';
import מוצרים from '../assets/images/DynamicProducts/pillows.jpg'
import מגבות from '../assets/images//DynamicProducts/towels.jpg'
// import מצעים from '../assets/images/linen.png'
import מארזים from '../assets/images/DynamicProducts/happy.jpg'
import מצעים from '../assets/images/bedding.jpg'
// import linen from '../assets/images/linen.png'

const imageMap = {
    'מגבות': מגבות,
    'מוצרים-משלימים-למיטה': מוצרים,
    'מצעים': bCover,
    'מארזים': מארזים,
};


export function DynamicProducts({ setIsCartVisible = { setIsCartVisible } }) {
    const products = useSelector((storeState) => storeState.productModule.products)
    const { category } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = `KingSize | ${category}`;
        dispatch(loadProducts(category))
        console.log('category:', category)
    }, [category])


    const onRemoveProduct = useCallback(async (productId) => {
        try {
            dispatch(removeProduct(productId));
        } catch (error) {
            console.log('error:', error);
        }
    }, []);

    useEffect(() => {
        document.title = `KingSize | ${category}`;
    }, [])




    return (
        <section className='main-dynamic-content full'>
            <div className="teaser-container full"
                style={{ backgroundImage: `url(${imageMap[category]})` }}>
                <h2 className='category-title'>
                    <Link to={`/${category}`} className="nav-link">{category}</Link>
                </h2>
                <p className='category-description'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                {/* <img src={imageMap[category]} alt="" className='product-img-1' /> */}
                {/* <img src={imageMap[category]} alt="" className='product-img-2' /> */}
            </div>
            <div className="product-list-container">
                <ProductList products={products} onRemoveProduct={onRemoveProduct} setIsCartVisible={setIsCartVisible} />
            </div>
        </section>

    )
}
