import React from 'react'
import { useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import teaser1 from '../../assets/images/HomePage/teaser-1.jpeg';
import teaser2 from '../../assets/images/HomePage/teaser-2.jpg';
import { linkService } from '../../services/link.service.js'
export function ImagesContainer() {

    const { ColorButtonHome } = linkService
    return (
        <div className='images-container full'>
            <div className='cover'></div>
            <div className='content'>
                <div
                    className='box'
                    style={{
                        backgroundImage: `url(${teaser2})`,
                    }}
                >
                    <h2>המצעים שלנו</h2>
                    <p>
                        אנו עושים את מירב המאמצים בכדי לתת לכם את המצעים האיכותיים ביותר,
                        במחירים ההוגנים ביותר
                    </p>
                    <Link to={`/מצעים`}>
                        <ColorButtonHome variant='contained'>למצעים</ColorButtonHome>
                    </Link>
                </div>
                <div
                    className='box'
                    style={{
                        backgroundImage: `url(${teaser1})`,
                    }}
                >
                    <h2>המגבות שלנו</h2>
                    <p>תוכלו להיכנס ולצפות במגוון המגבות האיכותיות ביותר שלנו</p>
                    <Link to={`/מגבות`}>
                        <ColorButtonHome variant='contained'>למגבות</ColorButtonHome>
                    </Link>
                </div>
            </div>
        </div>)
}
