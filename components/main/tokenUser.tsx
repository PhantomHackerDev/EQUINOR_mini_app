'use client';

import React, {useState, useEffect, useRef} from "react";
type TokenUserProps = {
  info: userInfo[];
};

type userInfo = {
  user: string;
  amount: string;
}

const TokenUser: React.FC<TokenUserProps> = ({info}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [info.length]);

  return (
    <div
      className="flex flex-col justify-center bg-[#1e1f23] rounded-full items-center w-full "
    >
      <div className="flex flex-col w-full justify-between transition-transform duration-500" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
        {info.map((info, index) => (
          <div className="flex flex-row justify-between w-full" key={index}>
            <p key={index} className="flex justify-between w-full py-2 px-6 text-[#efc99d]">
              <span>{info.user}</span>
              <span>{info.amount}</span>
            </p>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default TokenUser