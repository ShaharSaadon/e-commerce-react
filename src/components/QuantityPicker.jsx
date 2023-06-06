import React, { useState } from "react";

export function QuantityPicker({ product, handleUpdateCartItem }) {
    console.log('product:', product)
    const [quantity, setQuantity] = useState(product.quantity || 1);

    function increment() {
        setQuantity(prevValue => {
            const newValue = prevValue + 1;
            handleUpdateCartItem({ ...product, quantity: newValue });
            return newValue;

        })
    }

    function decrement() {
        setQuantity(prevValue => {
            const newValue = (prevValue > 0 ? prevValue - 1 : 0);
            handleUpdateCartItem({ ...product, quantity: newValue });
            return newValue;
        });
    };

    return (
        <div>
            {/* <p>Set the quantity</p> */}
            {/* <p>{product}</p> */}
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement} disabled={product.quantity <= 1}>
                    &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={quantity} />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                    &#xff0b;
                </button>
            </div>
        </div>
    );

}