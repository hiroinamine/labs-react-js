import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Users = props => {
  console.log("users", props);
  return (
    <div>
      <h1>Users</h1>
      <Link to="purchases">purchases</Link>
      <br />
      <Link to="password">pasword</Link>

      <Outlet></Outlet>
    </div>
  );
};

export default Users;
