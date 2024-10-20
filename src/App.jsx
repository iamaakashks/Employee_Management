import React from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./Components/Dashboard/AdminDashboard.jsx";
const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen text-zinc-50">
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </div>
  )
};

export default App;