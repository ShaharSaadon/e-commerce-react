import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { loadProducts, removeProduct, setCurrCategory, setFilterBy } from '../store/actions/product.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../components/ProductList'
import { ProductFilter } from '../components/ProductFilter'
import { Link, NavLink, useParams } from 'react-router-dom'
import { SubCategories } from '../components/SubCategories'
import pillows from '../assets/images/pillows.png'
import towels from '../assets/images/towells.png'
import linen from '../assets/images/linen.png'
import blankets from '../assets/images/blankets.png'

const imageMap = {
    'pillows': pillows,
    'towels': towels,
    'linen': linen,
    'blankets': blankets,
};


export function DynamicProducts() {

    const filterBy = useSelector((storeState) => storeState.productModule.filterBy)
    const products = useSelector((storeState) => storeState.productModule.products)
    const categories = useSelector((storeState) => storeState.productModule.categories)
    const { category, subCategory } = useParams()
    const dispatch = useDispatch()
    const initialSubCategories = categories[category].map((subCategory) => {
        return {
            name: subCategory.name,
            imageUrl: subCategory.imageUrl,
        };
    });
    const [subCategories, setSubCategories] = useState(initialSubCategories.map((subCategory) => subCategory.name));

    useEffect(() => {
        const minMaxPrices = getMinMaxPrices();
        dispatch(setFilterBy({ category, name: '', minMax: minMaxPrices, colors: getColors() }))
        setSubCategories(categories[category])
        dispatch(loadProducts())
        // dispatch(setCurrCategory(category))
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

    const onChangeFilter = useCallback(async (filterBy) => {
        try {
            dispatch(setFilterBy(filterBy))
            dispatch(loadProducts())
        } catch (error) {
            console.log('error:', error)
        }
    }, []);


    return (
        <section className='main-dynamic-content full'>
            <div className="teaser-container full">
                <h2 className='category-title'>
                    <Link to={`/${category}`} className="nav-link">{category}</Link>

                    {subCategory ? `| ${subCategory}` : ``}</h2>
                <p className='category-description'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                <img src={imageMap[category]} alt="" className='product-img-1' />
                <img src={imageMap[category]} alt="" className='product-img-2' />
            </div>

            {!subCategory ? (
                <SubCategories categories={subCategories} category={category} />
            ) : (
                ''
            )}

            <div className="product-list-container">
                <ProductList products={products} onRemoveProduct={onRemoveProduct} />
            </div>
            <div className="filter-container main-container">
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
