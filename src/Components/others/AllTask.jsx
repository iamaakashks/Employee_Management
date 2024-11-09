import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div className="px-20 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
      <div className="flex font-bold text-lg items-center p-4 rounded-md border-[1px]">
        <h4 className="w-1/5 text-center text-red-500">Employee Id</h4>
        <h4 className="w-1/5 text-center text-red-500">New Task</h4>
        <h4 className="w-1/5 text-center text-red-500">Active</h4>
        <h4 className="w-1/5 text-center text-red-500">Completed</h4>
        <h4 className="w-1/5 text-center text-red-500">Failed</h4>
      </div>
      <div className="taskupdate w-full h-60 flex flex-col gap-2 overflow-auto">
        
        {
          authData.employee.map((elem, index) => {
            return (
              <div key={index} className="flex p-4 bg-zinc-800 rounded-md">
                <h3 className="w-1/5 text-center">{elem.id}</h3>
                <h3 className="w-1/5 text-center">{elem.taskSummary.newTask}</h3>
                <h3 className="w-1/5 text-center">{elem.taskSummary.active}</h3>
                <h3 className="w-1/5 text-center">{elem.taskSummary.completed}</h3>
                <h3 className="w-1/5 text-center">{elem.taskSummary.failed}</h3>
            </div>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default AllTask;
