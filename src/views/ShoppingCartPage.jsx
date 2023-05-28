import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../store/actions/cart.actions';
import { Link } from 'react-router-dom';
import Select from 'react-select'

export function ShoppingCartPage() {
    const options = [
        { value: 19.99, label: 'משלוח אקספקס - עד 48 שעות בבית הלקוח' },
        { value: 0, label: 'משלוח רגיל - עד 4 ימי עסקים' },
        { value: 9.99, label: 'איסוף מנקודת חלוקה סמוך לביתך' }
    ]
    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)
    const [selectedShipping, setSelectedShipping] = useState(options[0]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleSelectChange = (selected) => {
        setSelectedShipping(selected);
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
                <div className='empty-cart'>העגלה שלך ריקה</div>
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
                                            <p>Color: {item.color}</p>
                                            <p>Size: {item.size} </p>
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

                                        </div>
                                        <div className="actions">
                                            <p onClick={() => handleRemoveFromCart(item._id)}>מחק</p><p>|</p>
                                            <p> מתנה? </p> <p>|</p> <p> שמור במועדפים</p>
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
                        <div className="sum-products">
                            <p>סה"כ המוצרים</p>
                            <p>
                                {calculateTotal().toFixed(2)}₪
                            </p>
                        </div>
                        <div className="sum-shipping">
                            <Select
                                options={options}
                                defaultValue={options[0]}
                                onChange={handleSelectChange}
                            />
                            <p> {selectedShipping.value}₪</p>

                        </div>
                        <div className="sum-total">
                            <h3>סה"כ לתשלום</h3>
                            {(calculateTotal() + selectedShipping.value).toFixed(2)}₪

                        </div>
                        <button className='nice-button'>המשך</button>
                    </div>
                    <div className="promo-code">
                        <h2>קוד קופון</h2>
                        <div className="code">
                            <button>הזן קוד</button>
                            <input type="text" placeholder="הקוד שלך" id="" />
                        </div>

                    </div>
                </div>
            )}
        </section>
    )
}
