import React from 'react'
import Book from './Book'
import Books from './Books'

function BookList() {
    return (
        <section>
            {Books.map((bookItem)=>{
                return(
                <Book
                    image={bookItem.img}
                    title={bookItem.title}
                    author={bookItem.author}
                />
                )
            })}
        </section>
    )
}

export default BookList
