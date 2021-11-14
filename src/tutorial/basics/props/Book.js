import React from 'react'

function Book(props) {
    const {img, author, title} = props
    return (
        <article>
            <img src={img} alt=''/>
            <h4>{title}</h4>
            <h4>{author}</h4>
        </article>
    )
}

export default Book
