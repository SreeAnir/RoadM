import React, { useState } from "react";

// ✅ This component will ONLY re-render if its props change
const Child = React.memo(({ value }) => {
  console.log("Child rendered");

  return (
    <div style={{ border: "1px solid gray", background: "grey", padding: "10px", margin: "10px 0" }}>
      <h3>Child Component  ✅ This component will ONLY re-render if its props change</h3>
      <p>Value from Parent: {value}</p>
      <p>Click on Update Value in parent</p>
    </div>
  );
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello");

  return (
    <div style={{ border: "1px solid gray", background: "green", padding: "10px", margin: "10px 0" }} >
      <h2>React.memo Example Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue("Updated at " + new Date().toLocaleTimeString())}>
        Update Value
      </button>

      {/* Child only re-renders when 'value' changes */}
      <Child value={value} />
      <p>✅ When to Use React.memo: </p> <p>
        Component relies only on props. </p>
      <p>
        Re-rendering it is expensive (heavy UI, lots of DOM).
      </p> <p>
        Parent re-renders frequently for other reasons.


      </p>
    </div>
  );
};

export default MemoExample;
