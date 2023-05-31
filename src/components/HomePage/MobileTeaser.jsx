import React from 'react'
import cotton from '../../assets/images/HomePage/cottonCover.png'

export function MobileTeaser() {
    return (

        <div className="mobile-teaser">
            <img src={cotton} alt="" className='cotton' />
            <div className="text">פשוט, איכות</div>
        </div>)
}
