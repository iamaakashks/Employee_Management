import React from "react";
import Header from "../../Components/others/Header.jsx";
import CreateTask from "../others/CreateTask.jsx";
const AdminDashboard = () => {
  return (
    <div className="w-full h-full">
        <Header />
        <CreateTask />
    </div>
  )
};

export default AdminDashboard;