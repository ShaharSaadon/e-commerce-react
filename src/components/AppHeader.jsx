import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import shoppingCart from '../assets/images/svgs/shoppingCart.svg'
import person from '../assets/images/svgs/person.svg'
import logo from '../assets/images/HomePage/0.png'
import mail from '../assets/images/svgs/mail.svg'
import instagram from '../assets/images/svgs/instagram.svg'
import facebook from '../assets/images/svgs/facebook.svg'

export function AppHeader() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const cart = useSelector((storeState) => storeState.cartModule.cart)
    const [quantity, setQuantity] = useState(0)
    const [isSticky, setIsSticky] = useState(false);
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.onscroll = handleScroll;

        return () => {
            window.onscroll = null;
        };
    }, []);

    useEffect(() => {
        setQuantity(getQuantity())
    }, [cart])

    function getQuantity() {
        let quantity = 0
        cart.forEach(cartItem => {
            quantity += cartItem.quantity
        });
        console.log('quantity:', quantity)
        return quantity
    }
    return (
        <header className="app-header full main container">
            <div className="upper-header">
                <p>לרגל פתיחת החנות, עד סוף חודש מאי- המשלוחים עלינו! קוד קופון <span>KING2023</span></p>
            </div>
            <div className={`app-header full main container ${isSticky ? 'main-header flex sticky' : 'main-header flex'}`}>

                <div
                    id="hamburger"
                    className={`hamburger ${isHeaderOpen ? 'open' : ''}`}
                    onClick={() => setIsHeaderOpen(!isHeaderOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="logo"><Link exact="true" to="/">
                    <img src={logo} alt="" />
                </Link></div>
                <nav className={`center ${isHeaderOpen ? 'open' : ''}`} onClick={() => setIsHeaderOpen(false)}>
                    <div className="close nav-link"
                    >
                        X סגור
                    </div>
                    <NavLink to="/" className="nav-link">בית </NavLink>
                    <NavLink to="/about" className="nav-link">קצת עלינו </NavLink>
                    <NavLink to="/מצעים" className="nav-link"> מצעים </NavLink>
                    <NavLink to="/מגבות" className="nav-link" > מגבות </NavLink>
                    <NavLink to="/מארזים" className="nav-link" > המארזים שלנו </NavLink>
                    <NavLink to="/מוצרים-משלימים-למיטה" className="nav-link" > מוצרים משלימים למיטה </NavLink>
                    <NavLink to="/blog" className="nav-link" > בלוג</NavLink>
                    <NavLink to="/contact" className="nav-link" >צור קשר</NavLink>
                    {/* <NavLink to="/admin-panel" className="nav-link" > מנהל </NavLink> */}
                </nav>
                <nav className="right">

                    {loggedinUser ? (
                        <NavLink to="/user-profile" className="nav-link flex">
                            <img src={person} alt="user-profile" className="icon" />
                            {/* לחשבון שלי */}
                        </NavLink>
                    ) : (
                        <>
                            <div className="login flex">
                                <img src={person} alt="user-profile" className="icon" />
                                <NavLink to="/login" className="nav-link">
                                    {/* התחברות */}
                                </NavLink>
                            </div>
                        </>
                    )}

                    <NavLink to="/shopping-cart" className="nav-link">
                        <img src={shoppingCart} alt="Shopping Cart" className="icon" />
                        {quantity}
                    </NavLink>
                </nav>

            </div>
        </header>
    )
}
