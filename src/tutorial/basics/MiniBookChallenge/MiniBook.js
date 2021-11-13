import React from 'react'

function MiniBook() {
    return (
        <div>
            {/* This is the Book shelf */}
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}

const Book = () => {
    // This is a single book component  
    return(
        <>
            <Image/>
            <Title/>
            <Author/>
        </>
    )
}

const Image = () => {
    // image of the book
    return(
        <img src="https://www.bigw.com.au/medias/sys_master/images/images/hc1/h28/29455282241566.jpg" alt="" width="200" height="200"/>
    )
}

const Author = () => {
    // details about the author
    return(
        <h4>Author of the book</h4>
    )
}

const Title = () => {
    // Title of the book
    return(
        <h4>Book Title</h4>
    )
}

export default MiniBook
