import React, { useState } from "react";

const ListRemoveExample = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Banana" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Orange" },
  ]);

  // Remove item by ID
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fruits List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeItem(item.id)}>❌ Remove</button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p>No items left!</p>}
    </div>
  );
};

export default ListRemoveExample;
