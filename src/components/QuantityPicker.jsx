import React from "react";
import { updateCartItem } from "../store/actions/cart.actions";
import { useDispatch } from "react-redux";

export function QuantityPicker({ item }) {
    const dispatch = useDispatch();

    function handleUpdateCartItem(product, quantity) {
        dispatch(updateCartItem({ ...product, quantity }));
    };
    function increment() {
        console.log('Incrementing quantity from:', item.quantity);
        const newQuantity = item.quantity + 1;
        console.log('To:', newQuantity);
        handleUpdateCartItem({ ...item, quantity: newQuantity });
    }

    function decrement() {
        console.log('Decrementing quantity from:', item.quantity);
        const newQuantity = item.quantity - 1;
        console.log('To:', newQuantity);
        handleUpdateCartItem({ ...item, quantity: newQuantity });
    }

    return (
        <div>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement} disabled={item.quantity <= 1}>
                    &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={item.quantity} />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                    &#xff0b;
                </button>
            </div>
        </div>
    );
}