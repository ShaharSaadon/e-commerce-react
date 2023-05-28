import { ProductPreview } from "../components/ProductPreview";
import PropTypes from 'prop-types';
import { memo } from 'react'

function _ProductList({ products, setIsCartVisible }) {
    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <section className="clean-list product-list">

            {products.map((product) =>
                <li key={product._id} className="product-container">
                    <ProductPreview product={product} setIsCartVisible={setIsCartVisible} />
                </li>
            )}
        </section>
    )
}

_ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    setIsCartVisible: PropTypes.func.isRequired,
};


export const ProductList = memo(_ProductList)