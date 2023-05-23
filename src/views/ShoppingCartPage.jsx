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
                <h1 className='logo'>LOGO</h1>
                <div className="process-bar">
                    <div className="summery">
                        <p><span>1</span> סיכום</p>
                    </div>
                    <div className="summery">
                        <p><span>2</span> פרטי משלוח</p>
                    </div>
                    <div className="summery">
                        <p><span>3</span> אופן המשלוח</p>
                    </div>
                    <div className="summery">
                        <p><span>4</span>הדפסת הזמנה</p>
                    </div>
                </div>
                <div className="cart-summery">
                    <div className="box">
                        <h2 className='title'>סיכום קנייה</h2>
                        <div>{quantity} מוצרים</div>
                    </div>
                    <p>אנא וודא כי המוצרים מתאים לבקשתך, בדגש על גודל וצבע</p>
                </div>
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
                                            <p>Color: {item.colors}</p>
                                            <p>Size: {item.sizes} </p>
                                        </div>
                                        {/* SHOULD CHANGE THE COLOR TO CHOSEN ONE */}
                                        {/* <p>{JSON.stringify(item.size)}</p> */}
                                        <div className="quantity flex">
                                            <button onClick={() => handleUpdateCartItem(item, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                -
                                            </button>
                                            <p>{item.quantity}</p>

                                            <button
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
                                                <p onClick={() => handleRemoveFromCart(item._id)}>מחק</p><p>|</p>
                                                <p> מתנה? </p> <p>|</p> <p> שמור במועדפים</p>
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
                <div className='cart-actions'>
                    <div className='total'>
                        <h3>סה"כ לתשלום</h3>
                        {calculateTotal().toFixed(2)}₪
                        <button className='nice-button'>Proceed to Checkout</button>
                    </div>


                    <div className="promo-code">
                        <h2>קוד קופון</h2>
                        <div className="code">
                            <button>הזן קוד</button>
                            <input type="text" placeholder="הקוד שלך" name="" id="" />
                        </div>

                    </div>
                </div>
            )}
        </section>
    )
}
