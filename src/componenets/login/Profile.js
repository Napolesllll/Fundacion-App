import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogautButton from "./LogautButton";
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
      <div  className='contenPerfil2'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
        <LogautButton />

      </div>
      </>
    )
  );
};

export default Profile;