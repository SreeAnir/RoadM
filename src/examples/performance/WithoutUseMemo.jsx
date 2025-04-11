import React, { useState } from "react";

function slowFunction(index) {
  console.log(`Calculating for item ${index}`);
  let total = 0;
  for (let i = 0; i < 1e6; i++) {
    total += i + index;
  }
  return total;
}

const ListItem = ({ index }) => {
  const value = slowFunction(index);
  return <li>Item {index} - Calculated: {value}</li>;
};

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);

  const items = Array.from({ length: 120 }, (_, i) => i + 1); // smaller for testing

  return (
    <div style={{ padding: "20px" }}>
      <h3>Without useMemo</h3>
      <button onClick={() => setCount(count + 1)}>Re-render parent</button>
      <ul>
        {items.map((index) => (
          <ListItem key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default WithoutUseMemo;
