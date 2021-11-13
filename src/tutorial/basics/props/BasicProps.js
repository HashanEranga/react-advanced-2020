import React from 'react'

// book shelf
function BasicProps() {
    return (
    <section>
        <BookList/>
    </section>
    )
}

function BookList() {
    return(
        <>
            {books.map((book) =>{
                return (
                    <Book
                        image = {book.img}
                        author = {book.author}
                        title = {book.title}
                    />
                )
            })}
        </>
    )
}
// Book Component
// direct method to define attributes instead of props
function Book(props) {
    // content of the book

    // another method of defining props attributes
    const {image, author, title} = props

    return(
        <article>
            <img src={image} alt='' width='200' height='200'/>
            <h4>{author}</h4>
            <h4>{title}</h4>
        </article>
    )
}

// Book List
const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg',
        arthor: 'Will Smith',
        title: 'Will'
    },
    {
        img: 'https://m.media-amazon.com/images/I/51SN8LtEkGL.jpg',
        arthor: 'Jamie Foxx (Author, Narrator), Corinne Foxx (Narrator), Grand Central Publishing (Publisher)',
        title: 'Act Like You Got Some Sense: And Other Things My Daughters Taught Me'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg',
        arthor: 'Bernie Mac (Author, Narrator), HarperAudio (Publisher)',
        title: 'Maybe You Never Cry Again'
    },
    {
        img: 'https://m.media-amazon.com/images/I/41JyuuGIctL.jpg',
        arthor: 'Paul Mooney (Author), Dave Chappelle (Author), Bobby Spears Jr. (Narrator), Urban AudioBooks (Publisher)',
        title: 'Black Is the New White'
    }
]

export default BasicProps
