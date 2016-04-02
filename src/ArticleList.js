import React from 'react'

import Article from './Article'
import SetOpenId from './SetOpenId'

export default SetOpenId(({
    articles,
    setId,
    id
}) => (
    <div>
        <ul>
            {articles.map(article =>
                <li key={article.id}>
                    <Article
                        {...article}
                        isOpen={article.id === id}
                        handleClick={setId(article.id)}
                    />
                </li>
            )}
        </ul>
    </div>
))
