import React, { useState } from "react";

const CounterFn = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Using functional setState
  };

  return (
    <>
      <button onClick={handleClick}>Click {count}</button>
    </>
  );
};

export default CounterFn;
