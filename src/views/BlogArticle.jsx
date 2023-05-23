import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export function BlogArticle() {
    const { article } = useParams()
    const articles = useSelector((storeState) => storeState.articleModule.articles)
    const currArticle = articles.find((ar) => ar.id === article);

    const { id, image, title, content } = currArticle
    console.log('currArticle:', currArticle)
    console.log('params:', article)
    return (
        <section className='article-container'>
            <div className="article-header">
                <h1>{title}</h1>
            </div>
            <div className="content">
                {content}
            </div>
        </section>
    )
}
