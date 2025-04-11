import React, { useState } from "react";

const RQExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = (operation) => {
    setCount((prevCount) => {
      if (operation === "increment" && prevCount < 4) {
        return prevCount + 1;
      } else if (operation === "decrement" && prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount; // Prevents count from exceeding limits
    });
  };
  

  return (
    <div style={{ background: "brown", padding: "10px", color: "white" }}>
      <h3>Value: {count}</h3>

      <div
        style={{
          border: "1px solid red",
          fontSize: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px",
          padding: "5px",
        }}
      >
        <button onClick={() => handleClick("increment")}>+</button>
        <button>OR</button>
        <button onClick={() => handleClick("decrement")}>-</button>
      </div>
    </div>
  );
};

export default RQExample;
