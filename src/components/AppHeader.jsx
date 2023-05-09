import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import shoppingCart from '../assets/images/svgs/shoppingCart.svg'
import search from '../assets/images/svgs/search.svg'
import person from '../assets/images/svgs/person.svg'
export function AppHeader() {

    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);

    return (
        <header className="app-header">
            <div className="flex justify-between items-center">

                <nav className="left-nav">
                    <NavLink to="/shopping-cart" className="nav-link">
                        <img src={shoppingCart} alt="Shopping Cart" className="icon" />
                    </NavLink>
                    {loggedinUser ? (
                        <NavLink to="/user-profile" className="nav-link">
                            <img src={person} alt="user-profile" className="icon" />
                        </NavLink>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                            <NavLink to="/signup" className="nav-link">Signup</NavLink>
                        </>
                    )}
                    <img src={search} alt="search" className="icon" />
                </nav>
                <nav className="center-nav">


                    <NavLink to="/shop" className="nav-link"> All </NavLink>
                    <NavLink to="/about" className="nav-link"> Blankets </NavLink>
                    <NavLink to="/pillows" className="nav-link"> Pillows </NavLink>
                    <NavLink to="/electronics" className="nav-link"> Electronics </NavLink>
                    <NavLink to="/baby" className="nav-link"> Baby </NavLink>
                    <NavLink to="/contact" className="nav-link"> Contact </NavLink>
                </nav>
                <div className="logo"><Link exact="true" to="/">KingSize</Link>
                </div>
            </div>
        </header>
    )
}
