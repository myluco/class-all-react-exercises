import {useState} from "react"
const UseStateBasics = () => {
  const [count, setCount] = useState(0); // 0 is the initial value; use state returns an array: [0] is the value, [1] is the function

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment </button>
    </>
  );
};

export default UseStateBasics;
