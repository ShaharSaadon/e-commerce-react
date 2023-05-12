import React from 'react'
import cover from '../assets/images/cover.webp';

export function HomePage() {
    return (
        <section className='full'>
            <div className="images-container">
                <img src={cover} alt="" className='wide-ratio cover-img' />
                <div className="box">
                    <h2>  Happy Holiday, for our new site
                        50% on the towels.</h2>
                    <p>I'm a title. Click here to add your own text and edit me.
                    </p>
                    <p>Shop now</p>
                </div>
            </div>
        </section>
    )
}
