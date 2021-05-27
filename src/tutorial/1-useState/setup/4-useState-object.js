import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'hashan', age:24, message: 'random message'});
  
  const toggleMessage = () => {
    if (person.message === 'random message'){
      setPerson({...person, message : 'hello world'})
    }
    else{
      setPerson({...person, message : 'random message'})
    }
  }


  return(
   <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={toggleMessage}>
        change message
      </button>
   </>

  )
};

export default UseStateObject;
