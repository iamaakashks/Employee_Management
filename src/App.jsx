import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);
  // useEffect(()=>{
  //   if(authData){
  //     const loggedInPerson = localStorage.getItem("loggedInPerson");
  //     if(loggedInPerson){
  //       setUser(loggedInPerson.role);
  //     }
  //   }
  // }, [authData]);
  const handleLogin = (email, password)=>{
    if(authData && authData.admin.find((e)=>email == e.email && password == e.password)){
      setUser("admin")
      localStorage.setItem("loggedInPerson", JSON.stringify({role: "admin"}));
    }else if(authData){
      const employee = authData.employee.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInPerson", JSON.stringify({role: "employee"}));
      }
    }else{
      alert("invalid Credentials");
    }
  }
  return (
    <div className="bg-zinc-900 w-full text-zinc-50">
      {!user? <Login handleLogin={handleLogin}/> : ""}
      {user == "admin" && <AdminDashboard data={loggedInUser} />}
      {user == "employee" && <EmployeeDashboard data={loggedInUser} />}
    </div>
  )
};

export default App;