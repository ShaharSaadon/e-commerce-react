import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calculateQuantity } from '../services/util.service'
import useScrollSticky from '../customHooks/useScrollSticky';
import shoppingCartSvg from '../assets/images/svgs/shoppingCart.svg'
import personSvg from '../assets/images/svgs/person.svg'
import logoImg from '../assets/images/HomePage/0.png'
import { linkService } from '../services/link.service';

export function AppHeader() {
    const { cart } = useSelector(({ cartModule }) => cartModule);
    const { loggedinUser } = useSelector(({ userModule }) => userModule);
    const { navLinks } = linkService;
    const [quantity, setQuantity] = useState(0)
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const isSticky = useScrollSticky();

    useEffect(() => {
        setQuantity(calculateQuantity(cart))
    }, [cart])

    function handleClickHeader() {
        setIsHeaderOpen(false);
    }

    function handleClickHamburger() {
        setIsHeaderOpen((prevIsHeaderOpen) => !prevIsHeaderOpen);
    }

    return (
        <header className="app-header full main container">
            <div className="upper-header">
                <p>לרגל פתיחת החנות, עד סוף חודש מאי- המשלוחים עלינו! קוד קופון <span>KING2023</span></p>
            </div>
            <div className={`app-header full main container ${isSticky ? 'main-header flex sticky' : 'main-header flex'}`}>

                <div id="hamburger" className={`hamburger ${isHeaderOpen ? 'open' : ''}`} onClick={handleClickHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="logo">
                    <Link exact="true" to="/">
                        <img src={logoImg} alt="" />
                    </Link>
                </div>

                <nav className={`center ${isHeaderOpen ? 'open' : ''}`} onClick={handleClickHeader}>
                    <div className="close nav-link"> X סגור </div>
                    {navLinks.map((link, index) => (
                        <NavLink key={index} to={link.path} className="nav-link">
                            {link.text}
                        </NavLink>
                    ))}

                    <NavLink to="/admin-panel" className="nav-link" > מנהל </NavLink>
                </nav>
                <nav className="right">

                    {loggedinUser ? (
                        <NavLink to="/user-profile" className="nav-link flex">
                            <img src={personSvg} alt="user-profile" className="icon" />
                        </NavLink>
                    ) : (
                        <>
                            <div className="login flex">
                                <NavLink to="/login" className="nav-link">
                                    <img src={personSvg} alt="user-profile" className="icon" />
                                </NavLink>
                            </div>
                        </>
                    )}

                    <NavLink to="/shopping-cart" className="nav-link">
                        <img src={shoppingCartSvg} alt="Shopping Cart" className="icon" />
                        {quantity}
                    </NavLink>
                </nav>

            </div>
        </header>
    )
}
