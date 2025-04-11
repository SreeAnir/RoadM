import React, { useState, useMemo } from "react";

// Simulate heavy calculation
function slowFunction(index) {
  console.log(`Calculating for item ${index}`);
  let total = 0;
  for (let i = 0; i < 1e6; i++) {
    total += i + index;
  }
  return total;
}

const ListItem = ({ index }) => {
  // useMemo to memoize the result of the slow function
  const value = useMemo(() => slowFunction(index), [index]);

  return <li>Item {index} - Calculated: {value}</li>;
};

const WithUseMemo = () => {
  const [count, setCount] = useState(0);

  const items = Array.from({ length: 120 }, (_, i) => i + 1); // adjust as needed

  return (
    <div style={{ padding: "20px" }}>
      <h3>With useMemo {count} - Only when state changes, the items will be re rendered</h3>
      <button onClick={() => setCount(count + 1)}>Re-render parent</button>
      <ul>
        {items.map((index) => (
          <ListItem key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default WithUseMemo;
