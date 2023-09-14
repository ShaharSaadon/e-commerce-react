import React, { useEffect, useState } from "react";
import { QuantityPicker } from "../QuantityPicker";
import { Link } from "react-router-dom";
import { updateCartItem } from "../../store/actions/cart.actions";

export const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    return (
        <li key={item._id}>
            {JSON.stringify(item, 0, null)}
            <div className="cart-item-preview">
                <img src={item.imgURL} alt={item.name} width="100" />
                <div className="content">
                    <Link to={`/product/${item._id}`} className="nav-link">
                        <h3 className="product-title">{item.name} </h3>
                    </Link>
                    <p>
                        {item.color} - {item.size}
                    </p>
                    <div className="box">
                        <div className="quantity flex">
                            <QuantityPicker quantity={quantity} />
                        </div>
                        <p>₪{item.price}</p>
                    </div>
                    {/* <button className='nice-button' onClick={() => handleRemoveFromCart(item)}>
                                            הסר מהעגלה
                                        </button> */}
                </div>
            </div>
        </li>
    );
};
