import React, { useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>Decrement</button>
    </div>
  );
};

export default CounterExample;
