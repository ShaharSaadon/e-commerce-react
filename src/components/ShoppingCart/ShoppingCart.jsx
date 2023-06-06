import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/actions/cart.actions';
import { showWarning } from '../../services/alert.message'
import { Link, useNavigate } from 'react-router-dom';
import { QuantityPicker } from '../QuantityPicker';
import closeBtn from '../../assets/images/close.png'

export function ShoppingCartCmp({ setIsCartVisible, isCartVisible }) {
    console.log('isCartVisible:', isCartVisible)
    const cart = useSelector((state) => state.cartModule.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleRemoveFromCart(cartItemId) {
        dispatch(removeFromCart(cartItemId));
        showWarning('Product Deleted Successfully');
    };

    function handleUpdateCartItem(product, quantity) {
        dispatch(updateCartItem({ ...product, quantity }));
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    function handleToggle() {
        setIsCartVisible((prevState) => !prevState)
    }

    function handleViewCart() {
        navigate('/shopping-cart')
        handleToggle()
    }

    function handleRemoveFromCart(item) {
        dispatch(removeFromCart(item));
    };


    return (
        <div className={isCartVisible ? 'shopping-background' : 'shopping-background hide'}>
            <section className={isCartVisible ? 'shopping-cart' : 'shopping-cart hide'}>
                <div className="header">
                    <h2 className='title'>סל הקניות</h2>
                    <img src={closeBtn} className='btn-close' alt="" onClick={handleToggle} />
                </div>


                {cart.length === 0 ? (
                    <p className='empty-cart'>סל הקניות שלנו כרגע ריק, ניתן תמיד להוסיף מוצרים ממגוון המוצרים הרחב שלנו!</p>
                ) : (
                    <ul className='clean-list items-list'>
                        {cart.map((item) => (
                            <li key={item._id}>
                                <div className='cart-item-preview'>
                                    <img src={item.imgURL} alt={item.name} width="100" />
                                    <div className='content'>
                                        <Link to={`/product/${item._id}`} className="nav-link">
                                            <h3 className='product-title'>{item.name} </h3>
                                        </Link>
                                        <p>{item.color}/{item.size}</p>
                                        <div className="box">
                                            <div className="quantity flex">
                                                <QuantityPicker product={item} handleUpdateCartItem={handleUpdateCartItem} />
                                            </div>
                                            <p>₪{item.price}</p>

                                        </div>
                                        {/* <button className='nice-button' onClick={() => handleRemoveFromCart(item)}>
                                            הסר מהעגלה
                                        </button> */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className='cart-actions flex'>
                        <div className='total'>
                            <h3>סה"כ:</h3>
                            ₪{calculateTotal()}
                        </div>
                        {/* <button className='nice-button'>Proceed to Checkout</button> */}

                        <button className='nice-button' onClick={handleViewCart}>
                            הזמן עכשיו                        </button>

                    </div>
                )}
            </section>
        </div>
    );
};