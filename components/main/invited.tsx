'use client';

import React, {useState} from "react";
import Image from "next/image";

const Invited: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row bg-[#d79839] rounded-full items-center z-20 p-4 gap-2">
        <p className="text-white text-2xl">Invite Friends</p>
        <div className="text-[#794d2c] bg-yellow-400 p-1 text-sm rounded-full">{`Earn income >`}</div>
          <div className="absolute flex right-5 bottom-0 z-0">
            <Image alt="profit" src={"/img/crypto/profit.png"} width={100} height={100} className="" />
          </div>
      </div>
    </div>
  )
}

export default Invited;