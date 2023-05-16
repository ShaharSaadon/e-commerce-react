import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../store/actions/cart.actions';
import { showWarning, showSuccess } from '../services/alert.message'
import { Link } from 'react-router-dom';
export function ShoppingCartCmp() {

    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        showWarning('Product Deleted Successfully')
    };

    const handleUpdateCartItem = (product, quantity) => {
        dispatch(updateCartItem({ ...product, quantity }));
        showSuccess(`Product Quantity Updated to ${quantity}`)

    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="shopping-background">
            <section className='shopping-cart'>
                <h2 className='title'>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className='clean-list items-list'>
                        {cart.map((item) => (
                            <li key={item._id}>
                                <div className='cart-item-preview'>
                                    <img src={item.imgURL} alt={item.name} width="100" />
                                    <div className="box">
                                        <Link to={`/product/${item._id}`} className="nav-link">{item.name}</Link>
                                        <p>{item.price}₪</p>
                                        <div className="quantity flex">
                                            <button className='nice-button' onClick={() => handleUpdateCartItem(item, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                -
                                            </button>
                                            <p>{item.quantity}</p>

                                            <button className='nice-button'
                                                onClick={() =>
                                                    handleUpdateCartItem(item, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button className='nice-button' onClick={() => handleRemoveFromCart(item._id)}>
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className='cart-actions flex'>
                        <div className='total'>
                            <h3>Total</h3>
                            {calculateTotal()}₪
                        </div>
                        <button className='nice-button'>Proceed to Checkout</button>
                        <button className='nice-button'>
                            <Link to="/shopping-cart" />
                            View full Cart
                            <Link />
                        </button>

                    </div>
                )}
            </section>
        </div>
    );
};