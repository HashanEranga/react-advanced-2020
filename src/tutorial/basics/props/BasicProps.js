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
function Book(props) {
    // content of the book
    return(
        <article>
            <img src={props.image} alt='' width={width} height={height}/>
            <h4>{props.author}</h4>
            <h4>{props.title}</h4>
        </article>
    )
}


export default BasicProps
