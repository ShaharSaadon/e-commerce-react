import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../store/actions/cart.actions';
import { Link } from 'react-router-dom';

export function ShoppingCartPage() {

    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateCartItem = (product, quantity) => {
        dispatch(updateCartItem({ ...product, quantity }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    useEffect(() => {
        setQuantity(getQuantityProducts())
    }, [cart])

    function getQuantityProducts() {
        let quantity = 0
        cart.forEach(cartItem => {
            quantity = quantity + 1
        });
        return quantity
    }

    return (
        <section className='shopping-cart-page'>
            <div className="header">
                <h2 className='title'>Cart Summery</h2><p>{quantity} Products</p>
                <p>Confirm the products and quantities of your order</p>
            </div>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className='clean-list items-list'>
                    {cart.map((item) => (
                        <li key={item._id}>
                            <div className='cart-item-preview'>
                                <div className="left-side flex">
                                    <img src={item.imgURL} alt={item.name} width="100" />
                                    <div className="box flex">
                                        <Link to={`/product/${item._id}`} className="nav-link">{item.name}</Link>
                                        <div className="attributes">
                                            <p>Color: {item.colors.join(',')}</p>
                                            <p>Size: 30X30 CM </p>
                                        </div>
                                        {/* SHOULD CHANGE THE COLOR TO CHOSEN ONE */}
                                        {/* <p>{JSON.stringify(item.size)}</p> */}
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

                                            {/* <button className='nice-button' onClick={() => handleRemoveFromCart(item._id)}>
                                                Remove from Cart
                                            </button> */}
                                            <div className="actions">
                                                <p onClick={() => handleRemoveFromCart(item._id)}>Remove</p><p>|</p>
                                                <p> It's a Gift?  </p> <p>|</p> <p> Save in favorites</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <p>{item.price * item.quantity}₪</p>
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
                </div>
            )}
        </section>
    )
}
