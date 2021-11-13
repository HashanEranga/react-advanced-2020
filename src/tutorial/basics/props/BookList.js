import React from 'react'
import Book from './Book'
import Books from './Books'

function BookList() {
    return (
        <section>
            {Books.map((bookItem)=>{
                return(
                <Book
                    key={bookItem.id} 
                    {...bookItem}
                />
                )
            })}
        </section>
    )
}

export default BookList
