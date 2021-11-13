import React from 'react'

// variables
const title = "Title of the book"
const author = "Name of the Author"
const image = "https://www.bigw.com.au/medias/sys_master/images/images/hc1/h28/29455282241566.jpg" 
const width = '200'
const height = '200'

// book shelf
function BasicProps() {
    return (
        <section>
            <Book
                title = {title}
                author = {author}
                image = {image}
            />
            <Book
                title = {title}
                author = {author}
                image = {image}
            />
            <Book
                title = {title}
                author = {author}
                image = {image}
            />
        </section>
    )
}

// Book Component
// direct method to define attributes instead of props
function Book({image, title, author}) {
    // content of the book

    // another method of defining props attributes
    // const {image, author, title} = props

    return(
        <article>
            <img src={image} alt='' width={width} height={height}/>
            <h4>{author}</h4>
            <h4>{title}</h4>
        </article>
    )
}


export default BasicProps
