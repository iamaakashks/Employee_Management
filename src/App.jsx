import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  useEffect(()=>{
    const loggedinuserdata = localStorage.getItem("loggedInPerson");
    if(loggedinuserdata){
      const userData = JSON.parse(loggedinuserdata);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password)=>{

    if(email=="admin@example.com" && password=="123"){
      setUser("admin")
      localStorage.setItem("loggedInPerson", JSON.stringify({role: "admin"}));
    }else if(userData){
      const employee = userData.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInPerson", JSON.stringify({role: "employee", data: employee}));
      }
    }else{
      alert("invalid Credentials");
    }
  }
  return (
    <div className="bg-zinc-900 w-full text-zinc-50 pb-4">
      {!user? <Login handleLogin={handleLogin}/> : ""}
      {user == "admin" && <AdminDashboard changeUser={setUser} data={loggedInUser} /> }
      {user == "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUser} />}
    </div>
  )
};

export default App;