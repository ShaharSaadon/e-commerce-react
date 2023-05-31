import React from 'react'
import { useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import teaser1 from '../../assets/images/HomePage/teaser-1.jpeg';
import teaser2 from '../../assets/images/HomePage/teaser-2.jpg';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useInView } from 'react-intersection-observer';
import Grow from '@mui/material/Grow';
import bCover from '../../assets/images/DynamicProducts/bedding-cover.jpg';
export function ImagesContainer() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const springs = useSpring({
        transform: inView ? 'scale(1)' : 'scale(0.5)',
        from: { transform: 'scale(0.5)' },
        config: { tension: 300, friction: 20, duration: 600 },
    });

    const ColorButtonHome = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blueGrey[900]),
        backgroundColor: 'inherit',
        border: 'white 2px solid',
        '&:hover': {
            backgroundColor: blueGrey[900],
            border: 'black 2px solid',
        },
    }));

    return (
        <div className='images-container full'>
            <div className='cover'></div>
            <div className='content'>
                <div
                    ref={ref}
                    className='box'
                    style={{
                        ...springs,
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
                    ref={ref}
                    className='box'
                    style={{
                        ...springs,
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
