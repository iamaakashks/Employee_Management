import React from "react";

const CreateTask = () => {
  return (
    <div className="px-20 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Create Task</h1>
      <form className="w-full flex justify-between items-center bg-zinc-800 p-4 rounded-md">
        <div className="flex flex-col w-1/3 gap-2">
          <div>
            <h3 className="font-medium text-lg">Task Title</h3>
            <input
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Date</h3>
            <input
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="date"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Assign to</h3>
            <input
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Employee id"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Category</h3>
            <input
              className="w-full outline-none bg-transparent border-[1px] border-zinc-700 px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Design, Dev, etct"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <h3 className="font-medium text-lg">Description</h3>
          <textarea
            rows="8"
            cols="40"
            className="mb-4 p-2 bg-transparent resize-none border-[1px] border-zinc-700 rounded-md"
          ></textarea>
          <button
            type="button"
            className="px-4 py-1.5 rounded-md bg-emerald-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
