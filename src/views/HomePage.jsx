import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { loadProducts } from '../store/actions/product.actions';
import bCover from '../assets/images/DynamicProducts/bedding-cover.jpg';
import { Link } from 'react-router-dom';
import teaser1 from '../assets/images/HomePage/teaser-1.jpg';
import teaser2 from '../assets/images/HomePage/teaser-2.jpg';
import { linkService } from '../services/link.service';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useInView } from 'react-intersection-observer';
import Grow from '@mui/material/Grow';
import { TeaserContainer } from '../components/TeaserContainer';
import { RecommendationsContainer } from '../components/RecommendationsContainer';

export function HomePage() {

    const { featuresLinks } = linkService;
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger the animation only once
    });

    const springs = useSpring({
        transform: inView ? 'scale(1)' : 'scale(0.5)',
        from: { transform: 'scale(0.5)' },
        config: { tension: 300, friction: 20, duration: 1500 },
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

    document.title = 'KingSize | דף הבית';

    useEffect(() => {
        dispatch(loadProducts());
    }, []);

    return (
        <section className='home-page-container full main-container'>
            <div className='images-container full'>
                <div className='cover'></div>
                <div className='content'>
                    <animated.div
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
                    </animated.div>
                    <animated.div
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
                    </animated.div>
                </div>
            </div>
            <div className='designed-nav full flex'>
                {featuresLinks.map((box, index) => (
                    <div className='box' key={index}>
                        <img src={box.src} alt={box.alt} />
                        <h6>{box.text}</h6>
                    </div>
                ))}
            </div>
            <TeaserContainer />
            <RecommendationsContainer />
        </section>
    );
}