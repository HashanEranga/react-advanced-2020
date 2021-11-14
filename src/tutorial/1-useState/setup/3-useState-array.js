import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) =>{
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  
  return(
    <>
      {
        people.map((person)=>{
          const {id, name} = person
          console.log(person)
          return(
            <div key={id} className='item'>
              <h2>
                {name}
              </h2>
              <button onClick={()=>removeItem(id)}>Remove</button>
            </div>
          )
        })
      }
      <button type='btn' onClick={() => setPeople([])}>clear items</button>
    </>
  )
};

export default UseStateArray;
