import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 w-1/4 h-full border-[1px] border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
            <h1 className="px-2 py-1 rounded-md text-red-600 underline">High</h1>
            <h4 className="text-sm">October 2024</h4>
        </div>
        <h1 className="text-2xl font-medium">Make a Youtube Video</h1>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia qui excepturi nulla totam ea!</p>
        <div className="text-center mt-4">
            <button className="px-4 py-1.5 bg-blue-600 font-semibold hover:bg-blue-800 hover:duration-200 hover:transition-all rounded-md">Accept</button>
        </div>
    </div>
  )
};

export default NewTask;
