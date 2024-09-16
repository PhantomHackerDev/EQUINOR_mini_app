'use client';

import React, {useState} from "react";
import Carousel from "@/components/common/carousel";
import { carouselImage } from "@/utils/content";
import Intro from "./intro";
import Tools from "./tools";
import Pair from "./pairs";


const Main: React.FC = () => {
  return(
    <div className="flex pt-[70px] w-full h-auto flex-col gap-6 px-4 pb-[100px]">
      <Carousel images={carouselImage} />
      <Intro />
      <Tools />
      <div className="flex w-full justify-between flex-row gap-6">
        <Pair imageSrc="/img/crypto/bitcoin.png" pairName="BTC/USDT" pairValue="58423.6" exchangeRate="1.23" plus="+" />
        <Pair imageSrc="/img/crypto/ether.png" pairName="ETH/USDT" pairValue="2564.8" exchangeRate="1.63" plus="-" />
      </div>
    </div>
  )
}

export default Main;