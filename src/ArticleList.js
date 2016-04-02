import React from 'react'

import Article from './Article'

export default ({
    articles
}) => (
    <div>
        <ul>
            {articles.map(article =>
                <li key={article.id}>
                    <Article {...article} />
                </li>
            )}
        </ul>
    </div>
)
