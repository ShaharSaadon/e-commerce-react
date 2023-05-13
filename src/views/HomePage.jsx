import React from 'react'
import bCover from '../assets/images/bedding-cover.jpg';
import delivery from '../assets/images/delivery.png'
import shield from '../assets/images/shield.png'
import payment from '../assets/images/payment.png'
import quality from '../assets/images/quality.png'
import costumerService from '../assets/images/customer-service.png'

export function HomePage() {
    return (
        <section className='full home-page-container'>
            <div className="images-container">
                <img src={bCover} alt="" className='wide-ratio cover-img' />
                <div className="box">
                    <h2>  Happy Holiday, for our new site
                        50% on the towels.</h2>
                    <p>I'm a title. Click here to add your own text and edit me.
                    </p>
                    <p>Shop now</p>
                </div>
                <div className="collections">
                    <div className="collection"></div>
                    <div className="collection"></div>
                    <div className="collection"></div>
                    <div className="collection"></div>
                </div>
            </div>
            <div className="features">
                <div className="feature">
                    <img src={delivery} alt="" />
                    <h6>Free Shipping</h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
                <div className="feature">
                    <img src={shield} alt="" />
                    <h6>5 Years Guarantee</h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
                <div className="feature">
                    <img src={delivery} alt="" />
                    <h6>Discount System</h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
                <div className="feature">
                    <img src={payment} alt="" />
                    <h6>Online Payments
                    </h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
                <div className="feature">
                    <img src={quality} alt="" />
                    <h6>Certified Products
                    </h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
                <div className="feature">
                    <img src={costumerService} alt="" />
                    <h6>Good Support</h6>
                    <p>Nullam sed ultricies erat, nec euismod metus.</p>
                </div>
            </div>
        </section>
    )
}
