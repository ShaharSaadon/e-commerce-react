import React, { useEffect } from 'react'
import bambuk from '../assets/images/Blog/bambuk-linen.jpg'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export function Blog() {

    const articles = useSelector((storeState) => storeState.articleModule.articles)

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(pink[300]),
        backgroundColor: pink[300],
        borderRadius: '20px',  // This sets border radius
        maxWidth: '150px',
        '&:hover': {
            backgroundColor: pink[100],
        },
    }));
    useEffect(() => {
        document.title = `KingSize | בלוג`;
    }, [])

    return (
        <section className='blog-container'>
            <div className="blog-header flex flex-column">
                <h2>המאמרים שלנו</h2>
                <div className='navigator'>דף הבית | בלוג</div>

            </div>
            <div className="content">
                {articles.map(({ id, title, content, image }) => (
                    <div key={id} className={`${id} article`}>
                        <img src={bambuk} alt="" />
                        <div className="text">
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <Link to={`/blog/${id}`}>
                                <ColorButton variant="contained">
                                    להמשך קריאה
                                </ColorButton>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
