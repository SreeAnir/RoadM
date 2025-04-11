import React, { useState, useEffect } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

const ExNoUseCallback = () => {
  const [count, setCount] = useState(0);

  const logMessage = () => {
    console.log("Clicked");
  };

  useEffect(() => {
    console.log("Effect ran");
  }, [logMessage]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={logMessage} />
    </div>
  );
};


export default ExNoUseCallback;
