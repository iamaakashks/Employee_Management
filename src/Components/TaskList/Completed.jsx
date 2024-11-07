import React from "react";

const Completed = () => {
  return (
    <div className="flex-shrink-0 w-1/4 h-full border-[1px] border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
            <h1 className="px-2 py-1 rounded-md text-red-600 underline">High</h1>
            <h4 className="text-sm">October 2024</h4>
        </div>
        <h1 className="text-2xl mt-4 font-medium">Make a Youtube Video</h1>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia qui excepturi nulla totam ea!</p>
        <div className="mt-4">
            <button className="w-full py-1.5 rounded-md bg-green-700 font-semibold">Completed</button>
        </div>
    </div>
  )
};

export default Completed;
