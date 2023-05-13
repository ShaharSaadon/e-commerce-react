import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import shoppingCart from '../assets/images/svgs/shoppingCart.svg'
import person from '../assets/images/svgs/person.svg'
import mail from '../assets/images/svgs/mail.svg'
import instagram from '../assets/images/svgs/instagram.svg'
import facebook from '../assets/images/svgs/facebook.svg'
import { setCurrCategory } from '../store/actions/product.actions'

export function AppHeader() {

    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);


    return (
        <header className="main-header">
            <div className="app-header first">
                <div className="flex justify-between items-center">
                    <div className="logo"><Link exact="true" to="/">KingSize</Link>
                    </div>
                    <nav className="center-nav">
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
            <div className="second flex justify-between">
                <nav className="left-nav">
                    <img src={instagram} alt="" className='icon' />
                    <img src={mail} alt="" className='icon' />
                    <img src={facebook} alt="" className='icon' />
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
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
