import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'hashan', age:24, message: 'random message'});
  
  const changeMessage = () => {
    if (person.message === 'random message'){
      setPerson({...person, message : 'hello world'})
    }
    else{
      setPerson({...person, message : 'random message'})
    }
  }

  return(
   <>
	  <h1>{person.name}</h1>
	  <h2>{person.age}</h2>
	  <h4>{person.message}</h4>

	  <button className='btn' onClick={changeMessage} type='button'>
	  	change Message
	  </button>
   </>

  )
};

export default UseStateObject;
