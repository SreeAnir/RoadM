import React from "react";
const AdminMessage = ({ isAdmin }) => {
  return <>{isAdmin && <h2>Welcome, Admin!</h2>}</>;
};

export default () => <AdminMessage isAdmin={false} />;
