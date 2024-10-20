import React from "react";

const AllTask = () => {
  return (
    <div className="px-20 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
      <div className="taskupdate w-full h-36 flex flex-col gap-2 overflow-auto">
        <div className="flex justify-between p-4 bg-zinc-800 rounded-md">
            <h3>Employee Name</h3>
            <h3>Task Title</h3>
            <h3>Status</h3>
        </div>
        <div className="flex justify-between p-4 bg-zinc-800 rounded-md">
            <h3>Employee Name</h3>
            <h3>Task Title</h3>
            <h3>Status</h3>
        </div>
        <div className="flex justify-between p-4 bg-zinc-800 rounded-md">
            <h3>Employee Name</h3>
            <h3>Task Title</h3>
            <h3>Status</h3>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
