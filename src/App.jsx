import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
const App = () => {
  const [user, setUser] = useState(null);
  
  const handleLogin = (email, password)=>{
    console.log(console.log(authData.employee.find((e)=> email == e.email && password == e.password)))
    console.log("hello");
    if(email === "admin@me.com" && password == "123"){
      setUser("admin")
    }else if(email == "user@me.com" && password == "123"){
      setUser("employee")
    }else{
      alert("invalid Credentials");
    }
  }

  const authData = useContext(AuthContext);
  return (
    <div className="bg-zinc-900 w-full text-zinc-50">
      {!user? <Login handleLogin={handleLogin}/> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmployeeDashboard />}
    </div>
  )
};

export default App;