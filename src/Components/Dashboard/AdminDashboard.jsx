import React from "react";
import Header from "../../Components/others/Header.jsx";
import CreateTask from "../others/CreateTask.jsx";
import AllTask from "../others/AllTask.jsx";
const AdminDashboard = () => {
  return (
    <div className="w-full min-h-screen">
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
};

export default AdminDashboard;