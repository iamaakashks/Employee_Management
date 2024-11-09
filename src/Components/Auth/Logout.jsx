import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const Logout = () => {

  const logoutFunction = ()=>{
    localStorage.setItem("loggedInPerson", '');
    window.location.reload();
  }

  return (
    <button onClick={logoutFunction} type='button' className="px-4 py-1.5 bg-red-900 rounded-md">Logout</button>
  )
};

export default Logout;
