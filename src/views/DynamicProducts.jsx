import React, { useCallback, useEffect, useState } from 'react'
import { loadProducts, removeProduct, setCurrCategory, setFilterBy } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { ProductFilter } from '../components/ProductFilter'
import { Link, useParams } from 'react-router-dom'
export function DynamicProducts() {

    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)
    const products = useSelector((storeState) => storeState.productModule.products)
    const categories = useSelector((storeState) => storeState.productModule.categories)
    const { category, subCategory } = useParams()
    const dispatch = useDispatch()
    const [subCategories, setSubCategories] = useState(categories[category])

    useEffect(() => {
        const minMaxPrices = getMinMaxPrices();
        dispatch(setFilterBy({ category, name: '', minMax: minMaxPrices, colors: getColors() }))
        dispatch(setCurrCategory(category))
        setSubCategories(categories[category])
        dispatch(loadProducts())
    }, [category])

    useEffect(() => {
        const colors = getColors()
        const minMaxPrices = getMinMaxPrices();
        dispatch(setFilterBy({ category, name: '', minMax: minMaxPrices, colors, }))
    }, [products])

    function getColors() {
        const colors = products.reduce((acc, product) => {
            const productColors = Array.isArray(product.colors)
                ? product.colors
                : [product.colors];

            productColors.forEach((color) => {
                if (!acc.includes(color)) {
                    acc.push(color);
                }
            });
            return acc;
        }, []);
        return colors;
    }

    function getMinMaxPrices() {
        if (!products || products.length === 0) {
            return [0, 0];
        }

        let minPrice = products[0].price;
        let maxPrice = products[0].price;

        products.forEach(product => {
            if (product.price < minPrice) {
                minPrice = product.price;
            }
            if (product.price > maxPrice) {
                maxPrice = product.price;
            }
        });

        return [minPrice, maxPrice];
    }

    function getCategoryNames() {
        const categoryNames = []
        Object.keys(categories).forEach(categoryName => {
            categoryNames.push(categoryName);
        });
        return categoryNames

    }

    const onRemoveProduct = useCallback(async (productId) => {
        try {
            dispatch(removeProduct(productId));
        } catch (error) {
            console.log('error:', error);
        }
    }, []);

    function onChangeFilter(filterBy) {
        console.log('filterBy:', filterBy)
        dispatch(setFilterBy(filterBy))
        dispatch(loadProducts())
    }

    return (
        <section className='main-dynamic-content'>
            <div className="teaser-container">
                <h2>{category}  {subCategory ? `| ${subCategory}` : ``}</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
            </div>

            {!subCategory ? <div className="sub-categories-container">
                <ul className='clean-list flex'>
                    <h2>
                        Subcategories
                    </h2>
                    {subCategories.map((name, index) => (
                        <React.Fragment key={index}>
                            <Link to={`/${category}/${name}`}>
                                <li>{name}</li>
                            </Link>
                        </React.Fragment>
                    ))}
                </ul>
            </div> : ''}

            <div className="product-list-container">
                <ProductList products={products} onRemoveProduct={onRemoveProduct} />
            </div>
            <div className="filter-container">
                <ProductFilter
                    filterBy={filterBy}
                    onChangeFilter={onChangeFilter}
                    getColors={getColors}
                    categories={getCategoryNames()}
                />
            </div>
        </section>

    )
}
