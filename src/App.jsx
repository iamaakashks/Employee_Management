import React, { useEffect } from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";
const App = () => {
  useEffect(()=>{
    // setLocalStorage();
    getLocalStorage();
  })
  return (
    <div className="bg-zinc-900 w-full text-zinc-50">
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
};

export default App;