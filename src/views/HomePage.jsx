import React, { useEffect } from 'react'
import bCover from '../assets/images/bedding-cover.jpg';
import delivery from '../assets/images/delivery.png'
import shield from '../assets/images/shield.png'
import payment from '../assets/images/payment.png'
import quality from '../assets/images/quality.png'
import costumerService from '../assets/images/customer-service.png'
import collectionImg from '../assets/images/collection-img.png'
import centerImg from '../assets/images/center-img.png'
import towelsImg from '../assets/images/towels.png'
import linenImg from '../assets/images/linen-img.png'
import blanketImg from '../assets/images/blanket-img.png'
import { SliderGallery } from '../components/SliderGallery'
import { RecommendsProducts } from '../components/RecommendsProducts.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/actions/product.actions';
import { ProductPreview } from '../components/ProductPreview';

export function HomePage() {
    const products = useSelector((storeState) => storeState.productModule.products.slice(0, 3))
    const dispatch = useDispatch()
    console.log('products:', products)

    useEffect(() => {
        document.title = 'KingSize | Home Page';
        dispatch(loadProducts())
    }, [])


    return (
        <section className='home-page-container full main-container'>
            <div className="images-container full">
                <img src={bCover} alt="" className='wide-ratio cover-img' />
                <div className="box">
                    <h2>  Happy Holiday, for our new site
                        50% on the towels.</h2>
                    <p>I'm a title. Click here to add your own text and edit me.
                    </p>
                    <p>Shop now</p>
                </div>
            </div>
            <div className="designed-nav full flex">
                <div className="box">
                    <img src={delivery} alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="box">
                    <img src={shield} alt="" />
                    <h6>5 Years Guarantee</h6>
                </div>
                <div className="box">
                    <img src={delivery} alt="" />
                    <h6>Discount System</h6>
                </div>
                <div className="box">
                    <img src={payment} alt="" />
                    <h6>Online Payments
                    </h6>
                </div>
                <div className="box">
                    <img src={quality} alt="" />
                    <h6>Certified Products
                    </h6>
                </div>
            </div>

            {/* <div className="features">
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

            </div> */}
            <div className="teaser-container full">
                <div className="left-space">
                </div>
                <div className="right-space">
                </div>
                <div className="title">
                    <h1> WHAT'S NEW</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quos, veritatis sunt error obcaecati nobis accusamus perspiciatis velit accusantium.</p>
                </div>
                <div className="teaser-1 teaser">
                    <img src={collectionImg} alt="" className='' />
                    <h2>COLLECTIONS</h2>
                    <p>Collections ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quos, veritatis sunt error obcaecati nobis accusamus perspiciatis velit accusantium.</p>
                </div>
                <div className="center-img">
                    <img src={centerImg} alt="CENTER" />
                </div>
                <div className="teaser-2 teaser">
                    <img src={towelsImg} alt="" />
                    <h2>TOWELS</h2>
                    <p>Linen ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quos, veritatis sunt error obcaecati nobis accusamus perspiciatis velit accusantium.</p>
                </div>
                <div className="teaser-3 teaser">
                    <img src={linenImg} alt="" />
                    <h2>LINEN</h2>
                    <p>Linen ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quos, veritatis sunt error obcaecati nobis accusamus perspiciatis velit accusantium.</p>
                </div>
                <div className="teaser-4 teaser">
                    <img src={blanketImg} alt="" />
                    <h2>Blankets</h2>
                    <p>Blankets ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quos, veritatis sunt error obcaecati nobis accusamus perspiciatis velit accusantium.</p>
                </div>
            </div>
            <div className="recommends-container">
                <h2>Our Recommendations</h2>
                <p>We Sure That You'll love it</p>
                <div className="recommends clean-list">
                    {products.map((product) =>
                        <li key={product._id} className="product-container">
                            <ProductPreview product={product} />
                        </li>
                    )}
                </div>
            </div>

        </section>
    )
}
