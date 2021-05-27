import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Hashan')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('randome message')

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
