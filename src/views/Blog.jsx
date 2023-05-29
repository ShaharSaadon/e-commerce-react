import React, { useEffect } from 'react'
import bambuk from '../assets/images/Blog/bambuk-linen.jpg'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export function Blog() {

    const articles = useSelector((storeState) => storeState.articleModule.articles)
    const navigate = useNavigate()

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
                            <Link className='continue' to={`/blog/${id}`}>להמשך קריאה </Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
