import React from "react";
const UserRole = ({ role }) => {
  switch (role) {
    case "admin":
      return <h2>Welcome, Admin!</h2>;
    case "moderator":
      return <h2>Welcome, Moderator!</h2>;
    default:
      return <h2>Welcome, Guest!</h2>;
  }
};
export default () => <UserRole role="admin" />;
