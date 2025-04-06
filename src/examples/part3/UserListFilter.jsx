import React, { useState } from "react";

const usersData = [
  { id: 1, name: "Alice", isActive: true, role: "user" },
  { id: 2, name: "Bob", isActive: false, role: "admin" },
  { id: 3, name: "Charlie", isActive: true, role: "user" },
];

const UserListFilter = () => {
  const [users, setUsers] = useState(usersData);

  const allActive = users.every((user) => user.isActive);
  const hasAdmin = users.some((user) => user.role === "admin");
  const activeUsers = users.filter((user) => user.isActive);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul style={{
        listStyle:"none",
         textAlign:"left"
      }}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} -{" "}
            {user.isActive ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>

      <hr />
      <div style={{
        background:"grey",
         textAlign:"left"
      }}>
      <h3 style={{
        background:"green"
      }}>Filters & Checks</h3>
      <p>All users active? .every() {allActive ? "Yes" : "No"}</p>
      <p>Is there an admin? .some() {hasAdmin ? "Yes" : "No"}</p>
      </div>
      <div style={{
        background:"yellow",
         textAlign:"left",
         color:"black"
      }}>
      <h3  style={{
         textAlign:"center"
      }}><u>Active Users .filter() :</u></h3>
      <ul  style={{
        listStyle:"none" ,
        textAlign:"center"
      }}>
        {activeUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default UserListFilter;
