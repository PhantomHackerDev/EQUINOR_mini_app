import React, {useState} from "react";

const Button: React.FC = () => {
  return (
    <div className="flex">
      <button className="flex flex-col" >
        <svg className="text-center" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="#efc99d" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path></svg>
        <span className="text-[#efc99d]"></span>
      </button>
    </div>
  )
}

export default Button