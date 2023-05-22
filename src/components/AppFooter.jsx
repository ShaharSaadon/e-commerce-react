import React from 'react'
import { Link } from 'react-router-dom'
import mail from '../assets/images/svgs/mail.svg'
import instagram from '../assets/images/svgs/instagram.svg'

export function AppFooter() {
    return (
        <footer className="app-footer full main-container">
            <div className="footer-container flex full">
                <nav className="king-size flex flex-column">
                    <h2 className='group-title'>King Size</h2>
                    <Link to="/blog" className="nav-link"> בלוג </Link>
                    <Link to="/about" className="nav-link"> קצת עלינו </Link>
                    <Link to="/" className="nav-link"> עמוד הבית </Link>
                    <Link to="/contact" className="nav-link"> צרו איתנו קשר </Link>
                    {/* <Link to="/contact" className="nav-link">  </Link> */}
                </nav>
                <nav className="Categories flex flex-column">
                    <h2 className='group-title'>מוצרים </h2>
                    <Link to="/מצעים" className="nav-link"> מצעים </Link>
                    <Link to="/מגבות" className="nav-link"> מגבות </Link>
                    <Link to="/מארזים" className="nav-link">המארזים שלנו</Link>
                    <Link to="/מוצרים" className="nav-link"> מוצרים משלימים למיטה</Link>
                </nav>

                <nav className="contact flex flex-column">
                    <h2 className='group-title'>דברו איתנו!</h2>
                    <p>תל אביב, רחוב האחים 15, 34343</p>
                    <p> kingSize@info.com</p>
                    <p>929-242-6868</p>

                </nav>
                <div className="logo">
                    LOGO
                </div>
            </div>
            <div className="lower-footer full">
                <div className="links-container">
                    <img src={instagram} alt="" />
                    <img src={mail} alt="" />
                </div>
                <div className="copyright">
                    Copyright © 2023 KignSize | Shahar Saadon Full Stack Developer

                </div>
            </div>
        </footer>
    )
}
