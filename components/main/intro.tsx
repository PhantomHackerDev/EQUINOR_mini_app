'use client';

import React, {useState} from "react";

const Intro: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row bg-[#2a2b31] rounded-full items-center">
        <svg className="rotate-180 m-2" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 21 21"><g fill="none" fillRule="evenodd"><path stroke="#efc99d" strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2l-2.999-.001l-2.294 2.294a1 1 0 0 1-1.32.083l-.094-.083l-2.294-2.294L4.5 17.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2zm-1 5h-6"></path><path fill="#efc99d" d="M6.499 9.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"></path><path stroke="#efc99d" strokeLinecap="round" strokeLinejoin="round" d="M15.5 12.5h-6"></path></g></svg>
        <div
          className="block w-full py-3 px-7 text-sm text-gray-900 rounded-full bg-[#2a2b31] overflow-hidden whitespace-nowrap"
        >
          <p className="text-[#efc99d] animate-scroll">{"1.Dear members, if you have any questions during the investment process, you can contact the 24-hour Telegram customer service: @equinorVIP, they will answer any questions for you."}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
