import React from 'react'

function ArrowFunc() {
    return (
        <div>
            {/* nested components */}
            {/* to show many components inside a one component is the activity going to do here */}
            <Person/>
            <Message/>
        </div>
    )
}

// Arrow Function implementation 
const Person = () => {
    return(
        <h1>This is the Person component as an arrow function</h1>
    )
}   

// normal component method 
function Message() {
    return(
        <h2>Message from a normal component</h2>
    )
}

export default ArrowFunc
