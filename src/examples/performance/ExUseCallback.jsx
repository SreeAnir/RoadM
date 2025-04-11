import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

const ExUseCallback = () => {
  const [count, setCount] = useState(0);

  // Memoized version of handleClick
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // No dependencies, never recreated

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default ExUseCallback;
