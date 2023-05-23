import React, { useEffect } from 'react'
import about from '../assets/images/about.jpg'
import aboutC from '../assets/images/about-cover.avif'
import aboutC2 from '../assets/images/about-cover.jpg'
import logo from '../assets/images/HomePage/0.png'
import collection from '../assets/images/collection-img.png'
export function AboutPage() {

    useEffect(() => {
        document.title = 'KingSize | קצת עלינו';
    }, [])

    return (
        <section className='about full'>
            {/* <div className="about-header">
                <h1>קצת עלינו</h1>
                <p>חברת קינג סייז שואפת לייצר קו חדש של טקסטיל בוטיק, אך יחד עם זאת הוגן לכל כיס</p>
            
            </div> */}
            <div className="img-container full">
                <img src={aboutC2} alt="" />
            </div>
            <div className="content">
                <h1 className='title'>KingSize, טקסטיל בוטיק במחירים הוגנים</h1>

                <h2 className='logo'>
                    <img src={logo} alt="" />
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias sint sapiente nemo recusandae quod explicabo placeat a unde exercitationem dolorum doloribus, voluptatum dicta consectetur blanditiis impedit officiis similique necessitatibus cumque. Dolorum et, temporibus vero saepe at earum debitis
                    nam in pariatur .</p>

                <div className="text-2">
                    Quam exercitationem voluptatibus placeat obcaecati ab dolorem.
                </div>

                <div className="images-container">
                    <div className="box">
                        <img src={about} alt="" />

                    </div>
                    <div className="box">
                        <img src={collection} alt="" />
                        <div className="text">text ipsum dolor sit amet consectetur.</div>
                    </div>

                </div>
            </div>

        </section>
    )
}
