'use client';

import React, {useState, useEffect} from "react";
import Image from "next/image";

interface RateProps {
  imgSrc: string,
  pairA: string,
  pairB: string,
  coinValue: string,
  exchangeRate: string,
  plus: string
}

const Rate: React.FC<RateProps> = ({imgSrc, pairA, pairB, coinValue, exchangeRate, plus}) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-4 rtl:space-x-reverse">
      <div className="flex-shrink-0 items-center gap-3 flex flex-row">
          <Image width={100} height={100} className="w-8 h-8 rounded-full" src={imgSrc} alt="Neil image" />
          <div className="flex flex-row items-center">
            <p className="text-[#efa646] text-sm font-bold">{pairA} &nbsp;</p>
            <p className="text-[#794d2c] text-[12px] font-thin">/&nbsp;{pairB}</p>
          </div>
      </div>
      <div className="flex flex-row justify-center items-center md:gap-5 gap-1">
        <p className={`text-sm font-medium left-3 ${plus === "-" ? "text-red-600" : "text-green-600"}`}>
          {coinValue}
        </p>
        <p className="flex flex-row text-center rounded-full bg-[#393a3e] py-2 md:px-5 px-2 right-0">
          <span className={`${plus === "-" ? "text-red-600" : "text-green-600"}`}>{plus}{exchangeRate}</span>
        </p>
      </div>
    </div>

  )
}

export default Rate