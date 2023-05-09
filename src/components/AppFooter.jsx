import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import mail from '../assets/images/svgs/mail.svg'
import instagram from '../assets/images/svgs/instagram.svg'

export function AppFooter() {
    return (
        <footer className="app-footer full main-container">
            <div className="footer-container flex">
                <nav className="Categories flex flex-column">
                    <h2>Products</h2>
                    <Link to="/blankets" className="nav-link"> Blankets </Link>
                    <Link to="/pillows" className="nav-link"> Pillows </Link>
                    <Link to="/linen" className="nav-link"> Linen </Link>
                    <Link to="/towels" className="nav-link"> Towels </Link>
                </nav>
                <nav className="king-size flex flex-column">
                    <h2>King Size</h2>
                    <Link to="/" className="nav-link"> home </Link>
                    <Link to="/blog" className="nav-link"> Blog </Link>
                    <Link to="/about" className="nav-link"> About </Link>
                    <Link to="/contact" className="nav-link"> Contact </Link>
                </nav>
                <nav className="contact flex flex-column">
                    <h2>Contact Us</h2>
                    <p>We would be happy to assist you with any request, question, suggestion or comment</p>
                    <div className="links-container">
                        <img src={instagram} alt="" />
                        <img src={mail} alt="" />
                    </div>
                </nav>
            </div>
        </footer>
    )
}
