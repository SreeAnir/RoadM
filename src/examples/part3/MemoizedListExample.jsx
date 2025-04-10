 
   import React, { useState, useCallback, useMemo } from "react";

  const ListItem = React.memo(({ id, name, selected, onClick }) => {
    console.log(`Rendering: ${name}`);
    return (
      <li
        onClick={() => onClick(id)}
        style={{
          cursor: "pointer",
          color: selected ? "green" : "black",
          fontWeight: selected ? "bold" : "normal",
        }}
      >
        {name}
      </li>
    );
  });
  
  const MemoizedListExample = () => {
    const [selectedId, setSelectedId] = useState(null);
  
    const handleClick = useCallback((id) => {
      setSelectedId(id);
    }, []);
  
    // ✅ Memoize the items list
    const items = useMemo(
      () => [
        { id: 1, name: "🍎 Apple" },
        { id: 2, name: "🍌 Banana" },
        { id: 3, name: "🍇 Grape" },
        { id: 4, name: "🍍 Pineapple" },
      ],
      []
    );
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>Memo Example with useMemo</h2>
        <ul>
          {items.map(({ id, name }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              selected={id === selectedId}
              onClick={handleClick}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default MemoizedListExample;
  