import React from "react";
import {
    removeFromCart,
    updateCartItem,
} from "../../store/actions/cart.actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const OrderCartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleUpdateCartItem = (product, quantity) => {
        console.log("Updating:", product, "New Quantity:", quantity);
        dispatch(updateCartItem({ ...product, quantity }));
    };

    function handleRemoveFromCart(item) {
        dispatch(removeFromCart(item));
    }
    return (
        <li key={item._id}>
            <div className="cart-item-preview">
                <div className="left-side flex">
                    <img src={item.imgURL} alt={item.name} width="100" />
                    <div className="box flex">
                        <Link to={`/product/${item._id}`} className="nav-link">
                            {item.name}
                        </Link>
                        <div className="attributes">
                            <p>Color: {item.color}</p>
                            <p>Size: {item.size} </p>
                        </div>
                        {/* SHOULD CHANGE THE COLOR TO CHOSEN ONE */}
                        {/* <p>{JSON.stringify(item.size)}</p> */}
                        <div className="quantity flex">
                            <button
                                onClick={() =>
                                    handleUpdateCartItem(
                                        item,
                                        item.quantity - 1
                                    )
                                }
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                            <p>{item.quantity}</p>

                            <button
                                onClick={() =>
                                    handleUpdateCartItem(
                                        item,
                                        item.quantity + 1
                                    )
                                }
                            >
                                +
                            </button>
                        </div>
                        <div className="actions">
                            <p onClick={() => handleRemoveFromCart(item)}>
                                מחק
                            </p>
                            <p>|</p>
                            <p> מתנה? </p> <p>|</p> <p> שמור במועדפים</p>
                        </div>
                    </div>
                </div>
                <p>{item.price * item.quantity}₪</p>
            </div>
        </li>
    );
};
