import React from "react";

const Header = ({data}) => {
  // console.log(data);
  return (
    <div className="w-full h-24 px-24 py-3 ">
        <div className='w-full border-[1px] border-zinc-700 rounded-md h-full flex items-center justify-between px-4'>
            <h1 className="font-extralight text-xl">Welcome, admin</h1>
            <button type='button' className="px-4 py-1.5 bg-red-900 rounded-md">Logout</button>
        </div>
    </div>
  )
};

export default Header;