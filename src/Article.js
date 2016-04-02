import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default ({
    title = "",
    text = "",
    comments = [],
    isOpen = true,
    handleClick
}) => (
    <div>
        <h3 onClick={handleClick}>{title}</h3>
        <div style={{display: isOpen ? "" : "none"}}>
            <section>{text}</section>
            <CommentList comments={comments} />
        </div>
    </div>
)
