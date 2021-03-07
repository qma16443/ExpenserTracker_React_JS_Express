import React from "react";
import { fetchLogout } from "../services/services";

//This function is to provide a logout function
export const Logout = ({ username, onLogout }) => {
  function performLogOut() {
    fetchLogout()
      .then(() => {
        onLogout();
      })
      .catch(() => console.log("fail to sign out"));
  }
  return (
    <div className="Logout">
      <button className='loginbtn' onClick={performLogOut}>Sign Out</button>
    </div>
  );
};
