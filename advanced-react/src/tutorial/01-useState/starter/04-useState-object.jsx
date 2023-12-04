import { useState } from 'react';

const UseStateObject = () => {
  const person1 = {
    name: "John",
    hobby: "foo hobby",
    age: 24
  };
  const person2 = {
    name: "Peter",
    hobby: "fred hobby",
    age: 29
  };
  const [person, setPerson] = useState(person2);
  const [otherPerson, setOtherPerson] = useState(person1);
  const displayPerson = () => {
    const toDisplay = person.name === person1.name ? person2 : person1;
    const toChoose = otherPerson.name === person1.name ? person2 : person1;
    console.log("--------------------")
    console.log("condition: " + person == person1)
    console.log("person: " + person.name);
    console.log("otherPerson: " + otherPerson.name);
    console.log("toDisplay: " + toDisplay.name);
    console.log("toChoose: " + toChoose.name);
    setPerson(toDisplay);
    setOtherPerson(toChoose);
  }
  console.log ("============ just before rendering")
  console.log("person: " + person.name);
  console.log("otherPerson: " + otherPerson.name);

  return (
    <>
      <h3>{person.name}</h3>
      <h4>Age: {person.age}</h4>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>show {otherPerson.name}</button>
    </>
  );
};

export default UseStateObject;
