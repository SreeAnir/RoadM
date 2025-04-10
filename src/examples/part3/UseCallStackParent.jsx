import React, { useState, useCallback } from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("Rendering ChildButton");
  return <button onClick={onClick}>Click Me</button>;
});

const UseCallStackParent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button clicked from Child Component!");
  }, []); // No dependencies → will be memoized once

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Child receives a memoized version of handleClick */}
      <ChildButton onClick={handleClick} />
    </div>
  );
};

export default UseCallStackParent;
