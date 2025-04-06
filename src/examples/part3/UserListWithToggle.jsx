import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Alice", isActive: true, role: "user" },
  { id: 2, name: "Bob", isActive: false, role: "admin" },
  { id: 3, name: "Charlie", isActive: true, role: "user" },
];

const UserListWithToggle = () => {
  const [users, setUsers] = useState(initialUsers);

  const toggleActive = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    );
    setUsers(updatedUsers);
  };

  const allActive = users.every((user) => user.isActive);
  const hasAdmin = users.some((user) => user.role === "admin");
  const activeUsers = users.filter((user) => user.isActive);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List with Toggle djfh</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              type="checkbox"
              checked={user.isActive}
              onChange={() => toggleActive(user.id)}
            /> 
            {user.name} - {user.role} -{" "}
            {user.isActive ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>

      <hr />

      <h3>Summary</h3>
      <p>All users active? <strong>{allActive ? "Yes" : "No"}</strong></p>
      <p>Is there an admin? <strong>{hasAdmin ? "Yes" : "No"}</strong></p>
      <p>Active Users:</p>
      <ul>
        {activeUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListWithToggle;
