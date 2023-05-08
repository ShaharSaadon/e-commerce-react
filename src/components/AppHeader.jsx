import React from 'react'
import { NavLink } from 'react-router-dom'


export function AppHeader() {

    return (
        <header className="app-header p20">
            <div className="info flex justify-between items-center">
                <div className="logo">KingSize</div>
                <nav>
                    <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/shop" className="nav-link"> Shop </NavLink>
                    <NavLink to="/about" className="nav-link"> About </NavLink>
                    <NavLink to="/contact" className="nav-link"> Contact </NavLink>
                    <NavLink to="/user-page" className="nav-link"> UserPage </NavLink>
                </nav>
            </div>
        </header>
    )
}
