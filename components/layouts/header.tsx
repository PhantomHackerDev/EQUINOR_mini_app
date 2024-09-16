'use client';

import React, {useState} from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="bg-black w-full flex flex-row justify-between top-0 z-20">
      <div className="flex flex-row w-full justify-between items-center py-4">
        <div className="flex flex-row items-center gap-1 pl-4">
          <p className="">
            <Image alt="logo" src={"/img/logo/logo.webp"} width={50} height={50} className="" />
          </p>
          <p className="text-[#efc99d] text-sm font-bold">EQUINOR</p>
        </div>
        <div className="flex flex-row items-center gap-1 pr-4">
          <span className="flex rounded-full items-center w-[30px] h-[30px] p-1 bg-[#333333]">
            <svg className="text-center" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="#efc99d" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2l1 1v1.931C7.061 19.436 4 16.072 4 12m14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.95 7.95 0 0 1-1.67 4.873"></path></svg>
          </span>
          <span className="flex rounded-full items-center w-[30px] h-[30px] p-1 bg-[#333333]">
            <svg className="text-center" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="#efc99d" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;