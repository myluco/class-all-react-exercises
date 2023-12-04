import { data } from '../../../data';
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson =  (id) => {
    const newPeople = people.filter( (person) => person.id !== id);
    setPeople(newPeople)
  };

  const removeAll =  () => {
    setPeople([])
  };

  return (
  <div>
    {people.map( (person) => {
      const {id, name} = person;
      return (
        <div key={id}>
          <p>{name}</p>
          <button onClick={() => removePerson(id)}>Remove</button>
        </div>
      );
    })}

    <button  onClick={removeAll} style={{marginTop: '2rem'}}>Clear All</button>
  </div>
  );
};

export default UseStateArray;
