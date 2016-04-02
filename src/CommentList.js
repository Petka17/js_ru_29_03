import React from 'react'
import ToogleOpen from './ToggleOpen'

export default ToogleOpen(({
    comments = [],
    isOpen = true,
    handleClick
}) => (
    <div>
        <a href="#" onClick={handleClick}>
            {isOpen ?
                "Close Comments" :
                "Show Comments"
            }
        </a>
        <ul style={{display: isOpen ? "" : "none"}}>
            {comments.map(comment =>
                <li key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.text}</p>
                </li>
            )}
        </ul>
    </div>
))