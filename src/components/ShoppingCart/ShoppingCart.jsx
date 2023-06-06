import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/actions/cart.actions';
import { showWarning } from '../../services/alert.message'
import { Link, useNavigate } from 'react-router-dom';
import { QuantityPicker } from '../QuantityPicker';
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
    return (
        <div className={isCartVisible ? 'shopping-background' : 'shopping-background hide'}>
            <section className={isCartVisible ? 'shopping-cart' : 'shopping-cart hide'}>
                <button className='btn-close' onClick={handleToggle}>X</button>
                <h2 className='title'>עגלת הקניות</h2>

                {cart.length === 0 ? (
                    <p>אין מוצרים בעגלה.</p>
                ) : (
                    <ul className='clean-list items-list'>
                        {cart.map((item) => (
                            <li key={item._id}>
                                <div className='cart-item-preview'>
                                    <img src={item.imgURL} alt={item.name} width="100" />
                                    <div className="box">
                                        <Link to={`/product/${item._id}`} className="nav-link">{item.name}</Link>
                                        <p>{item.price}₪</p>
                                        <p> <span> צבע: </span>{item.color}</p>
                                        <p> <span>גודל:</span>  {item.size}</p>
                                        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
                                        <div className="quantity flex">
                                            <QuantityPicker product={item} handleUpdateCartItem={handleUpdateCartItem} />




                                        </div>
                                        <button className='nice-button' onClick={() => handleRemoveFromCart(item.cartItemId)}>
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
                            <h3>סה"כ לתשלום</h3>
                            {calculateTotal()}₪
                        </div>
                        {/* <button className='nice-button'>Proceed to Checkout</button> */}

                        <button className='nice-button' onClick={handleViewCart}>
                            המשך לתשלום / צפה בכל העגלה
                        </button>

                    </div>
                )}
            </section>
        </div>
    );
};