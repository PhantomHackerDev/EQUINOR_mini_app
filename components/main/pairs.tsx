'use client';

import React, {useState} from "react";
import Image from "next/image";

interface pairProps {
  imageSrc: string,
  pairName: string,
  pairValue: string,
  exchangeRate: string,
  plus: string
}

const Pair: React.FC<pairProps> = ({imageSrc, pairName, pairValue, exchangeRate, plus}) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col w-full bg-[#2a2b31] p-4 rounded-xl gap-2">
        <div className="absolute bg-red-500 filter blur-[20px] w-[50px] h-[50px] rounded-full right-2 bottom-2"></div>
        <div className="flex flex-row items-center gap-2">
          <Image alt={pairName} src={imageSrc} width={100} height={100} className="w-[30px] h-[30px]" />
          <p className="text-[#efc99d] text-center">{pairName}</p>
        </div>
        <div className="flex">
          <p className="text-[#efc99d] text-center">{pairValue}</p>
        </div>
        <div className="flex bg-[#44454a] rounded-full w-20">
          <p className={`${plus === '+' ? "text-green-600" : "text-red-600"} pl-2 p-1`}>{`${plus}${exchangeRate}%`}</p>
        </div>
      </div>
    </div>
  )
}

export default Pair;