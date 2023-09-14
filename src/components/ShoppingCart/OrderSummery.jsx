import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    updateCartItem,
} from "../../store/actions/cart.actions";
import { Link } from "react-router-dom";
import Select from "react-select";
import { OrderCartItem } from "./OrderCartItem";
export function OrderSummery({ onNext }) {
    const options = [
        { value: 19.99, label: "משלוח אקספקס - עד 48 שעות בבית הלקוח" },
        { value: 0, label: "משלוח רגיל - עד 4 ימי עסקים" },
        { value: 9.99, label: "איסוף מנקודת חלוקה סמוך לביתך" },
    ];

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [selectedShipping, setSelectedShipping] = useState(options[0]);
    const cart = useSelector((state) => state.cartModule.cart);

    useEffect(() => {
        setQuantity(getQuantityProducts());
    }, [cart]);

    function getQuantityProducts() {
        let quantity = 0;
        cart.forEach((cartItem) => {
            quantity = quantity + 1;
        });
        return quantity;
    }

    const handleSelectChange = (selected) => {
        setSelectedShipping(selected);
    };

    const calculateTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div>
            <div className="cart-summery">
                <div className="box">
                    <h2 className="title">סיכום קנייה</h2>
                    <div>{quantity} מוצרים</div>
                </div>
                <p>אנא וודא כי המוצרים מתאים לבקשתך, בדגש על גודל וצבע</p>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">העגלה שלך ריקה</div>
            ) : (
                <ul className="clean-list items-list">
                    {cart.map((item) => (
                        <OrderCartItem item={item}></OrderCartItem>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="cart-actions">
                    <div className="total">
                        <div className="sum-products">
                            <p>סה"כ המוצרים</p>
                            <p>{calculateTotal().toFixed(2)}₪</p>
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
                            {(
                                calculateTotal() + selectedShipping.value
                            ).toFixed(2)}
                            ₪
                        </div>
                        <button onClick={onNext} className="nice-button">
                            המשך
                        </button>
                    </div>
                    <div className="promo-code">
                        <h2>קוד קופון</h2>
                        <div className="code">
                            <button className="nice-button">הזן קוד</button>
                            <input type="text" placeholder="הקוד שלך" id="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
