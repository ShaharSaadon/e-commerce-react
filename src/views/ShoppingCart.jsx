import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../store/actions/cart.actions';

export function ShoppingCart() {

    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateCartItem = (product, quantity) => {
        dispatch(updateCartItem({ ...product, quantity }));

    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item._id}>
                            <div>
                                <img src={item.imgURL} alt={item.name} width="100" />
                                <h3>{item.name}</h3>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleRemoveFromCart(item._id)}>
                                    Remove from Cart
                                </button>
                                <button
                                    onClick={() =>
                                        handleUpdateCartItem(item, item.quantity - 1)
                                    }
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <button
                                    onClick={() =>
                                        handleUpdateCartItem(item, item.quantity + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div>
                    <h3>Total: {calculateTotal()}</h3>
                    <button>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};