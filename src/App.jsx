import React from "react";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard  from "./Components/Dashboard/EmployeeDashboard.jsx";
import TaskListNumbers from "./Components/others/TaskListNumbers.jsx";
const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen text-zinc-50">
      {/* <Login /> */}
      <EmployeeDashboard />
    </div>
  )
};

export default App;