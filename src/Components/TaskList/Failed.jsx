import React from "react";

const Failed = ({data}) => {
  return (
    <div className="flex-shrink-0 w-1/4 h-full border-[1px] border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
            <h1 className="px-2.5 py-0.5 rounded-md border-[1px] bg-slate-600">{data.category}</h1>
            <h4 className="text-sm">{data.date}</h4>
        </div>
        <h1 className="text-2xl mt-2 font-medium">{data.title}</h1>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="mt-4">
            <h2 className="w-full py-1.5 font-semibold text-center bg-red-600 text-transparent bg-clip-text">Failed</h2>
        </div>
    </div>
  )
};

export default Failed;
