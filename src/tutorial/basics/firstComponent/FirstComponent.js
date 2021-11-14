// capitalize the first function 
// that way the React knows that this is a component
// inside the function the language we are writing is JSX
import React from 'react'

// stateless functional component
// always return JSX
function Greetings() {
    return (
        <div>
            <h4>This is the first component</h4>
        </div>
    )
}

export default Greetings
