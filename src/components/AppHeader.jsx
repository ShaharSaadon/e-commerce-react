import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import shoppingCart from '../assets/images/svgs/shoppingCart.svg'
import person from '../assets/images/svgs/person.svg'
import mail from '../assets/images/svgs/mail.svg'
import instagram from '../assets/images/svgs/instagram.svg'
import facebook from '../assets/images/svgs/facebook.svg'

export function AppHeader() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const cart = useSelector((storeState) => storeState.cartModule.cart)
    const [quantity, setQuantity] = useState(0)

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
        <header className="main-header">
            <div className="app-header first">
                <div className="flex justify-between items-center">
                    <div className="logo"><Link exact="true" to="/">KingSize</Link>
                    </div>
                    <nav className="upper-nav">
                        <NavLink to="/shop" className="nav-link"> All </NavLink>
                        <NavLink to="/blankets" className="nav-link"> Blankets </NavLink>
                        <NavLink to="/pillows" className="nav-link" > Pillows </NavLink>
                        <NavLink to="/linen" className="nav-link" > Linen </NavLink>
                        <NavLink to="/towels" className="nav-link">Towels </NavLink>
                        <NavLink to="/contact" className="nav-link" > Contact </NavLink>
                        <NavLink to="/admin-panel" className="nav-link" > Admin </NavLink>
                    </nav>
                </div>
            </div>
            <div className="lower-nav flex justify-between">
                <nav className="left-nav">
                    <a href="https://www.instagram.com/kingsizeboutique/" target="_blank">
                        <img src={instagram} alt="" className='icon' />
                    </a>
                    <a href="https://www.instagram.com/kingsizeboutique/" target="_blank">
                        <img src={mail} alt="" className='icon' />
                    </a>
                    <a href="https://www.instagram.com/kingsizeboutique/" target="_blank">
                        <img src={facebook} alt="" className='icon' />
                    </a>
                </nav>
                <nav className="right-nav flex">

                    {loggedinUser ? (
                        <NavLink to="/user-profile" className="nav-link">
                            <img src={person} alt="user-profile" className="icon" />
                        </NavLink>
                    ) : (
                        <>
                            <div className="login flex">
                                <img src={person} alt="user-profile" className="icon" />
                                <NavLink to="/login" className="nav-link">Log In</NavLink>
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
