import React, { useEffect, useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setTask({title, date, assignTo, category, description, active:false, newTask:true, completed:false, failed:false});
    const data = JSON.parse(localStorage.getItem('employees'));
    data.forEach((elem)=>{
      if(assignTo.toLowerCase() === elem.id.toLowerCase()){
        elem.tasks.push(task);
      }
    })
    localStorage.setItem('employees', JSON.stringify(data));
  setTitle('');
  setDate('');
  setAssignTo('');
  setCategory('');
  setDescription('');
  };
  return (
    <div className="px-20 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Create Task</h1>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full flex justify-between items-center bg-zinc-800 p-4 rounded-md"
      >
        <div className="flex flex-col w-1/3 gap-2">
          <div>
            <h3 className="font-medium text-lg">Task Title</h3>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Date</h3>
            <input
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="date"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Employee id"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Category</h3>
            <input
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Design, Dev, etct"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <h3 className="font-medium text-lg">Description</h3>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows="8"
            cols="40"
            className="mb-4 p-2 bg-transparent resize-none border-[1px] border-zinc-700 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-800 hover:duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
