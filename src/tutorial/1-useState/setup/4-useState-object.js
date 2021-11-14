import React, { useState } from 'react';

const UseStateObject = () => {
<<<<<<< HEAD
  const [name, setName] = useState('Hashan')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('randome message')
=======
  const [person, setPerson] = useState({name:'hashan', age:24, message: 'random message'});
  
  const changeMessage = () => {
    if (person.message === 'random message'){
      setPerson({...person, message : 'hello world'})
    }
    else{
      setPerson({...person, message : 'random message'})
    }
  }

>>>>>>> d112c2fad67df05481afde6e96bc4920f92f925c

  return(
   <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={() => setMessage('hello hashan')}>
        change Message
      </button>

      <button className="btn" onClick={() => setName('Eranga')}>
        change Name
      </button>

      <button className="btn" onClick={() => setAge(34)}>
        change Age
      </button>
   </>

  )
};

export default UseStateObject;
