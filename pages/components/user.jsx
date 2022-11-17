import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <small>{user.phone}</small>
    </div>
  );
};

export default User;
