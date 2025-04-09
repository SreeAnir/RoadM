import React, { useState } from "react";

// ✅ Memoized ListItem - only re-renders when props change
const ListItem = React.memo(({ item, onClick }) => {
  console.log(`Rendering: ${item.name}`);
  return (
    <li onClick={() => onClick(item.id)} style={{ cursor: "pointer" }}>
      {item.name}
    </li>
  );
});

const MemoizedListExample = () => {
  const [clickedId, setClickedId] = useState(null);

  const items = [
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🍌 Banana" },
    { id: 3, name: "🍇 Grape" },
    { id: 4, name: "🍍 Pineapple" }
  ];

  const handleClick = (id) => {
    setClickedId(id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Memoized List Example</h2>
      <p>Clicked Item ID: {clickedId}</p>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default MemoizedListExample;
