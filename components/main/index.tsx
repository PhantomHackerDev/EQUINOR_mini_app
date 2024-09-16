'use client';

import React, {useState} from "react";
import Carousel from "@/components/common/carousel";
import { carouselImage } from "@/utils/content";
import Intro from "./intro";
import Tools from "./tools";


const Main: React.FC = () => {
  return(
    <div className="flex pt-[70px] w-full h-auto flex-col gap-6 px-4 pb-[100px]">
      <Carousel images={carouselImage} />
      <Intro />
      <Tools />
    </div>
  )
}

export default Main;