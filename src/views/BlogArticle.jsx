import React from 'react'
import { useSelector } from 'react-redux'

export function BlogArticle() {
    const articles = useSelector((storeState) => storeState.articleModule.articles || [])

    return (
        <section className='article-container'>
            <div className="article-header">
                <h1>article header</h1>
            </div>
            <div className="content">
                bb
                bb
                bb
            </div>
        </section>
    )
}
