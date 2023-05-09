import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function AppHeader() {

    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);

    return (
        <header className="app-header p20">
            <div className="info flex justify-between items-center">
                <div className="logo">KingSize</div>
                <nav>
                    <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/shop" className="nav-link"> Shop </NavLink>
                    <NavLink to="/about" className="nav-link"> About </NavLink>
                    <NavLink to="/contact" className="nav-link"> Contact </NavLink>
                    <NavLink to="/shopping-cart" className="nav-link"> Shopping Cart </NavLink>
                    {loggedinUser ? (
                        <NavLink to="/user-profile" className="nav-link">User Profile</NavLink>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                            <NavLink to="/signup" className="nav-link">Signup</NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}
