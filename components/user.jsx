import React from "react";

const User = ({ beasky }) => {
  return (
    <>
      <p>{beasky.name}</p>
      <small>{beasky.email}</small>
    </>
  );
};

export default User;
