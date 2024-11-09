import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  setLocalStorage();
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    const {employee} = getLocalStorage();
    setUserData(employee);
  }, []);
  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;