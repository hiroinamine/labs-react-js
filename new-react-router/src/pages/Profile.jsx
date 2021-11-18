import React from "react";
import { useParams, useNavigate } from "react-router";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile: {id}</h1>

      <button onClick={() => navigate("/")}>Dashboard</button>
    </div>
  );
};

export default Profile;
