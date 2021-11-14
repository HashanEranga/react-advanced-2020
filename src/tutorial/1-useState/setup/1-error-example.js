import React, { useState } from 'react';

const ErrorExample = () => {
  let title = 'Hashan Eranga';
  
  const handleClick = () =>{
        title = 'Hello People'
        console.log(title)
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Click Here
      </button>
    </>
  );
};

export default ErrorExample;
