'use client';

import React, {useState} from "react";
import Carousel from "@/components/common/carousel";
import { aboutTeam, carouselImage } from "@/utils/content";
import Intro from "./intro";
import Tools from "./tools";
import Pair from "./pairs";
import Invited from "./invited";
import Dex from "./dex";
import ExchangeRate from "./exchangeRate";
import TokenUser from "./tokenUser";

const info = [
  {
    user: "123456",
    amount: "+$1284.39"
  },
  {
    user: "789654",
    amount: "+$9685.39"
  }
]

const Main: React.FC = () => {
  return(
    <div className="flex pt-[70px] w-full h-auto flex-col gap-6 px-4 pb-[70px]">
      <Carousel images={carouselImage} />
      <Intro />
      <Tools />
      <div className="flex w-full justify-between flex-row gap-6">
        <Pair imageSrc="/img/crypto/bitcoin.png" pairName="BTC/USDT" pairValue="58423.6" exchangeRate="1.23" plus="+" />
        <Pair imageSrc="/img/crypto/ether.png" pairName="ETH/USDT" pairValue="2564.8" exchangeRate="1.63" plus="-" />
      </div>
      <Invited />
      <div className="flex flex-col justify-between w-full px-6">
        <ul className="navbar-links flex justify-between md:mx-6">
          <Dex className="navbar-link  text-[#794d2c]" activeClassName="navbar-link underline text-yellow-400 navbar-link-active" networkName="binance" >BINANCE</Dex>
          <Dex className="navbar-link  text-[#794d2c]" activeClassName="navbar-link underline text-yellow-400 navbar-link-active" networkName="okx" >OKX</Dex>
          <Dex className="navbar-link  text-[#794d2c]" activeClassName="navbar-link underline text-yellow-400 navbar-link-active" networkName="huobi" >HUOBI</Dex>
          <Dex className="navbar-link  text-[#794d2c]" activeClassName="navbar-link underline text-yellow-400 navbar-link-active" networkName="coinbase" >COINBASE</Dex>
        </ul>
      </div>
      <ExchangeRate />
      <TokenUser info={info} />
      <div className="flex w-full bg-[#1e1f23] p-3 rounded-2xl">
        <p className="text-[#efc99d] text-sm font-light">{aboutTeam}</p>
      </div>
      <div className="grid grid-cols-2 w-full py-6 rounded-2xl bg-[#1e1f23]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#efc99d] text-sm font-light">Safe Operation</p>
          <p className="text-[#efc99d] text-sm font-extrabold">260Day</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#efc99d] text-sm font-light">Cumulative Income</p>
          <p className="text-[#efc99d] text-sm font-extrabold">$221003691</p>
        </div>
      </div>
    </div>
  )
}

export default Main;