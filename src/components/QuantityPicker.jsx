import { useState } from "react";

export const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState();

    const decrement = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const increment = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    return (
        <div className="quantity-picker">
            <button onClick={decrement}>-</button>
            <span className="quantity-value">{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};
