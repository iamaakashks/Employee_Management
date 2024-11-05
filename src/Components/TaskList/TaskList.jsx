import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Failed from "./Failed";

const TaskList = () => {
  return (
    <div className="tasklist px-24 py-8 overflow-x-auto mt-8 w-full h-1/2 flex gap-8 flex-nowrap">
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <Failed />
    </div>
  )
};

export default TaskList;