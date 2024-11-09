import React from "react";

const NewTask = ({data}) => {
  console.log(data.title);
  return (
    <div className="flex-shrink-0 w-1/4 h-full border-[1px] border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
            <h1 className="px-2.5 py-0.5 rounded-md border-[1px] bg-slate-600">{data.category}</h1>
            <h4 className="text-sm">{data.date}</h4>
        </div>
        <h1 className="text-2xl mt-2 font-medium">{data.title}</h1>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="text-center mt-4">
            <button className="px-4 py-1.5 bg-blue-600 font-semibold hover:bg-blue-800 hover:duration-200 hover:scale-105 rounded-md">Accept</button>
        </div>
    </div>
  )
};

export default NewTask;
