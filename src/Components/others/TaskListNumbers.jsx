import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className='w-full px-24 flex gap-8 mt-8'>
        <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-400 to-purple-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">{data.taskSummary.newTask}</h1>
            <h4 className="font-bold text-xl">New Task</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-400 to-purple-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">{data.taskSummary.active}</h1>
            <h4 className="font-bold text-xl">Active</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-400 to-purple-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">{data.taskSummary.completed}</h1>
            <h4 className="font-bold text-xl">Completed</h4>
        </div>
        <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-400 to-purple-400 py-4 px-8 rounded-md">
            <h1 className="font-medium text-4xl">{data.taskSummary.failed}</h1>
            <h4 className="font-bold text-xl">Failed</h4>
        </div>
    </div>
  )
};

export default TaskListNumbers