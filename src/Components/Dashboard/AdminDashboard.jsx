import React from "react";
import Header from "../../Components/others/Header.jsx";
import CreateTask from "../others/CreateTask.jsx";
import AllTask from "../others/AllTask.jsx";
const AdminDashboard = (props) => {
  document.title = "Admin Dashboard";
  return (
    <div className="w-full min-h-screen">
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask />
        <AllTask />
    </div>
  )
};

export default AdminDashboard;