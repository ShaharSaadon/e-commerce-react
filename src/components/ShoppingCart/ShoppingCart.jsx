import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    updateCartItem,
} from "../../store/actions/cart.actions";
import { showWarning } from "../../services/alert.message";
import { useNavigate } from "react-router-dom";
import closeBtn from "../../assets/images/close.png";
import { CartItem } from "./CartItem";

export function ShoppingCartCmp({ setIsCartVisible, isCartVisible }) {
    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function calculateTotal() {
        return cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    }

    function handleToggle() {
        setIsCartVisible((prevState) => !prevState);
    }

    function handleViewCart() {
        navigate("/shopping-cart");
        handleToggle();
    }

    return (
        <div
            className={
                isCartVisible
                    ? "shopping-background"
                    : "shopping-background hide"
            }
        >
            <section
                className={
                    isCartVisible ? "shopping-cart" : "shopping-cart hide"
                }
            >
                <div className="header">
                    <h2 className="title">סל הקניות</h2>
                    <img
                        src={closeBtn}
                        className="btn-close"
                        alt=""
                        onClick={handleToggle}
                    />
                </div>

                {cart.length === 0 ? (
                    <p className="empty-cart">
                        סל הקניות שלנו כרגע ריק, ניתן תמיד להוסיף מוצרים ממגוון
                        המוצרים הרחב שלנו!
                    </p>
                ) : (
                    <ul className="clean-list items-list">
                        {cart.map((item) => (
                            <CartItem item={item}></CartItem>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="cart-actions flex">
                        <div className="total">
                            <h3>סה"כ:</h3>₪{calculateTotal()}
                        </div>
                        {/* <button className='nice-button'>Proceed to Checkout</button> */}

                        <button
                            className="nice-button"
                            onClick={handleViewCart}
                        >
                            הזמן עכשיו{" "}
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
