import React, { useEffect, useRef } from 'react'
import delivery from '../assets/images/HomePage/delivery.png'
import shield from '../assets/images/HomePage/shield.png'
import payment from '../assets/images/HomePage/payment.png'
import quality from '../assets/images/HomePage/quality.png'
import collectionImg from '../assets/images/collection-img.png'
import centerImg from '../assets/images/HomePage/center-img.png'
import towelsImg from '../assets/images/towels.png'
import linenImg from '../assets/images/linen-img.png'
import blanketImg from '../assets/images/blanket-img.png'
import teaser1 from '../assets/images/HomePage/teaser-1.jpg'
import teaser2 from '../assets/images/HomePage/teaser-2.jpg'
import nCover from '../assets/images/HomePage/cover.avif'
import nCover2 from '../assets/images/HomePage/cover2.avif'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/actions/product.actions';
import { ProductPreview } from '../components/ProductPreview';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'

export function HomePage() {

    const products = useSelector((storeState) => storeState.productModule.products.slice(0, 3))
    const dispatch = useDispatch()
    console.log('products:', products)

    useEffect(() => {
        document.title = 'KingSize | דף הבית';
        dispatch(loadProducts())
    }, [])
    const springs = useSpring({
        from: { y: 0 },
        to: { y: 50 },
        config: { duration: 1500 }, // Set the duration to 1500 milliseconds (1.5 seconds)
    })
    return (
        <section className='home-page-container full main-container'>
            <div className="images-container full">
                <div className="cover">
                    {/* <animated.img src={nCover} alt="" style={fade} className='cover-img' /> */}
                </div>
                {/* <ImagesContainer /> */}
                <div className="content">
                    <div className="box" style={{ backgroundImage: `url(${teaser2})` }}>
                        <h2>
                            המצעים שלנו
                        </h2>
                        <p>אנו עושים את מירב המאמצים בכדי לתת לכם את המצעים האיכותיים ביותר, במחירים ההוגנים ביותר
                        </p>
                        <animated.p style={springs} className='shop'>
                            <Link to='/מצעים'>למצעים</Link>
                        </animated.p>
                    </div>
                    <div className="box" style={{ backgroundImage: `url(${teaser1})` }}>

                        <h2>  המגבות שלנו</h2>
                        <p>תוכלו להיכנס ולצפות במגוון המגבות האיכותיות ביותר שלנו
                        </p>

                        <animated.p style={springs} className='shop'>
                            <Link to='/מגבות'>למגבות</Link>
                        </animated.p>
                    </div>
                </div>
            </div>
            <div className="designed-nav full flex">
                <div className="box">
                <img src={delivery} alt="" />
                    <h6>100% Cotton</h6>
                </div>
                <div className="box">
                <img src={delivery} alt="" />
                    <h6>100% Cotton</h6>
                </div>
                <div className="box">
                    <img src={shield} alt="" />
                    <h6>Hypoallergenic</h6>
                </div>
                <div className="box">
                    <img src={delivery} alt="" />
                    <h6>Fast Delivery</h6>
                </div>
                <div className="box">
                <img src={payment} alt="" />
                <h6>
                High Quality Fair Prices                    </h6>
                </div>
                <div className="box">
                    <img src={quality} alt="" />
                    <h6>Safe Order
                    </h6>
                </div>
            </div>
            <div className="teaser-container full">
                <div className="title" >
                    <h1> מה חדש?</h1>

                    <p style={springs}>ריכזנו עבורכם את מקבץ הקטגוריות אותם אנו מספקים, כל מוצר חתום על ידינו באיכות הגבוהה ביותר תוך רצון לספק חמירים הונגנים לכל הלקוחות שלנו.    </p>
                </div>

                <div className="teaser-1 teaser">
                    <img src={collectionImg} alt="" className='' style={springs} />
                    <h2>המארזים שלנו</h2>
                    <p>מארזים שלנו מהווים תכנון ייחודי ומודרני שמעניק לחדר השינה שלכם מראה אלגנטי ומרהיב. נשמה רומנטית מושקעת בפרטים האיכותיים והמדויקים, יחד עם רמה גבוהה של נוחות ועמידות. </p>
                </div>
                <div className="center-img">
                    <img src={centerImg} alt="CENTER" class='center' style={springs} />
                </div>
                <div className="teaser-2 teaser">
                    <img src={towelsImg} alt="" style={springs} />
                    <h2>המגבות</h2>
                    <p>
                        מגבות המכירה שלנו הן הבחירה המושלמת עבורכם. עשויות מ-100 אחוז כותנה איכותית, הן מעניקות תחושה נעימה ורכה על העור. בנוסף לכך, הן עמידות ואיכותיות מאוד, מה שמבטיח שתהנו מהן לאורך זמן.</p>
                </div>
                <div className="teaser-3 teaser">
                    <img src={linenImg} alt="" style={springs} />
                    <h2>מצעים</h2>
                    <p>צעים שלנו הם הבחירה המושלמת עבורכם. באיכותם המעולה ובמחירם ההוגן, הם מציעים חווית שינה נהדרת ללקוחותינו. מצעים איכותיים ועמידים, הם עשויים מחומרים ברמה הגבוהה ביותר. אנו מתחייבים לאיכות המוצרים שלנו, מבטיחים לכם מצעים שישמשו אתכם לאורך זמן. יחד עם זאת, אנו מתיימרים לשמור על המחירים ההוגנים ללקוחותינו, כך שתוכלו ליהנות ממצעים איכותיים במחיר שפוי וסביר.</p>
                </div>
                <div className="teaser-4 teaser">
                    <img src={blanketImg} alt="" style={springs} onEnter />
                    <h2>מוצרים משלימים למיטה</h2>
                    <p>מוצרים המשלימים את המיטה שלכם הם הפתרון המושלם ליצירת חווית שינה מושלמת. בחרו מתוך מגוון המוצרים שלנו, המתאימים בצורה מושלמת לסגנון ולטעמים האישיים שלכם. סדינים איכותיים ונעימים, כריות מתכווננות לתמיכה מותאמת אישית, ושמיכות רכות ומפנקות. אלה הם רק חלק מהמוצרים המשגעים שנמצאים בקולקציה שלנו</p>
                </div>
            </div>
            {/* <div className="recommends-container">
                <h2>ההמלצות שלנו</h2>
                <p>אנחנו בטוחים שתאהבו את זה</p>
                <div className="recommends clean-list">
                {products.map((product) =>
                    <li key={product._id} className="product-container">
                    <ProductPreview product={product} />
                    </li>
                    )}
                    </div>
                </div> */}

        </section>
    )
}

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


        // const fade = useSpring({
        //     from: { opacity: 0, },
        //     to: { opacity: 1, },
        //     config: { duration: 2500, reset: true }, // Set the duration to 1500 milliseconds (1.5 seconds)
        
        // })