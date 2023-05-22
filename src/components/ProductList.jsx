import { ProductPreview } from "../components/ProductPreview";
import { memo } from 'react'


function _ProductList({ products, onRemoveProduct, toggleCart, setIsCartVisible }) {
    return (
        <section className="clean-list product-list">

            {products.map((product) =>
                <li key={product._id} className="product-container">
                    <ProductPreview product={product} onRemoveProduct={onRemoveProduct} setIsCartVisible={setIsCartVisible} />
                </li>
            )}
        </section>
    )
}


export const ProductList = memo(_ProductList)