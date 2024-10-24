import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const handleLogin = (email, password)=>{
    if(authData && authData.admin.find((e)=>email == e.email && password == e.password)){
      setUser("admin")
    }else if(authData && authData.employee.find((e)=> email == e.email && password == e.password)){
      setUser("employee")
    }else{
      alert("invalid Credentials");
    }
  }
  return (
    <div className="bg-zinc-900 w-full text-zinc-50">
      {!user? <Login handleLogin={handleLogin}/> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmployeeDashboard />}
    </div>
  )
};

export default App;