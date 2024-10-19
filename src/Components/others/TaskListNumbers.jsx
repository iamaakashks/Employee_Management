import React from "react";

const TaskListNumbers = () => {
  return (
    <div className='w-full px-24 flex gap-8 mt-8'>
        <div className="w-full flex flex-col gap-4 bg-red-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">0</h1>
            <h4 className="font-bold text-xl">New Task</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-red-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">0</h1>
            <h4 className="font-bold text-xl">Completed</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-red-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">0</h1>
            <h4 className="font-bold text-xl">Accepted</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-red-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">0</h1>
            <h4 className="font-bold text-xl">Failed</h4>
        </div>
    </div>
  )
};

export default TaskListNumbers