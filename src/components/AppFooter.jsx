import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import mailSvg from '../assets/images/svgs/mail.svg';
import instagramSvg from '../assets/images/svgs/instagram.svg';
import logoImg from '../assets/images/HomePage/0.png';
import { linkService } from '../services/link.service';

export function AppFooter() {
    const { productLinks, kingSizeLinks } = linkService;
    return (
        <footer className="app-footer full main-container">
            <div className="footer-container flex full">
                <div className="logo">
                    <img src={logoImg} alt="King Size | מצעי בוטיק" />
                </div>
                <section className="king-size flex flex-column">
                    <h2 className='group-title'>King Size</h2>
                    {kingSizeLinks.map((link, index) => (
                        <Link to={link.path} key={index} className="nav-link">{link.label}</Link>
                    ))}
                </section>
                <section className="categories flex flex-column">
                    <h2 className='group-title'>מוצרים </h2>
                    {productLinks.map((link, index) => (
                        <Link to={link.path} key={index} className="nav-link">{link.label}</Link>
                    ))}
                </section>
                <address className="contact flex flex-column">
                    <h2 className='group-title'>דברו איתנו!</h2>
                    <p>תל אביב, רחוב האחים 15, 34343</p>
                    <p><a href="mailto:kingSize@info.com">kingSize@info.com</a></p>
                    <p><a href="tel:929-242-6868">929-242-6868</a></p>
                </address>

            </div>
            <div className="lower-footer full">
                <div className="links-container">
                    <img src={instagramSvg} alt="instagram" />
                    <img src={mailSvg} alt="mail" />
                </div>
                <div className="copyright">
                    Copyright © 2023 KignSize | Shahar Saadon Full Stack Developer

                </div>
            </div>
        </footer>
    )
}
