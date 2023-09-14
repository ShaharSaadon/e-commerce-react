import { useState } from "react";
import { updateCartItem } from "../store/actions/cart.actions";
import { useDispatch } from "react-redux";

export const QuantityPicker = ({ quantity, setQuantity }) => {
    const dispatch = useDispatch();

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
            {setQuantity ? <button onClick={decrement}>-</button> : ""}
            <span className="quantity-value">{quantity}</span>
            {setQuantity ? <button onClick={increment}>+</button> : ""}
        </div>
    );
};
