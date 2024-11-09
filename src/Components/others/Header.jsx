import React from "react";
import Logout from "../Auth/Logout";

const Header = (props) => {
  return (
    <div className="w-full h-24 px-24 py-3 ">
        <div className='w-full border-[1px] border-zinc-700 rounded-md h-full flex items-center justify-between px-4'>
            <h1 className="font-extralight text-xl">Welcome, admin</h1>
            <Logout changeUser={props.changeUser} />
        </div>
    </div>
  )
};

export default Header;