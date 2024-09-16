'use client';

import React, {useState} from "react";
import Link from "next/link";

const Tools: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-xl items-center bg-[#2a2b31]">
      <div className="flex flex-col gap-6 w-full p-4 items-center">
        <div className="grid grid-cols-4 justify-center items-center w-full ">
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 576 512' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M0 112.5v309.8c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3c-87-32.5-174-10.3-261 11.9c-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5M288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96m-224 0c35.3 0 64 28.7 64 64H64zm64-208c0 35.3-28.7 64-64 64v-64zm384 160v64h-64c0-35.3 28.7-64 64-64M448 96h64v64c-35.3 0-64-28.7-64-64'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Recharge</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M22 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 20v-2a2 2 0 0 1 2 2Zm10 0h-2a2 2 0 0 1 2-2Zm0-4a4 4 0 0 0-4 4h-2a4 4 0 0 0-4-4V8h10Zm4-6h-2V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V4h18Zm-9 5a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Withdraw</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 16 16' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><g fill='#efc99d'><path d='M8.05 9.6c.336 0 .504-.24.554-.627c.04-.534.198-.815.847-1.26c.673-.475 1.049-1.09 1.049-1.986c0-1.325-.92-2.227-2.262-2.227c-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64c.272 0 .455-.147.564-.51c.158-.592.525-.915 1.074-.915c.61 0 1.03.446 1.03 1.084c0 .563-.208.885-.822 1.325c-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745'/><path d='m10.273 2.513l-.921-.944l.715-.698l.622.637l.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89l.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622l.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01l-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637l-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89l-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622l-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01l.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944l-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318l-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92l-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016l.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944l1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318l.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92l.016-1.32a1.89 1.89 0 0 0-1.912-1.911z'/><path d='M7.001 11a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/></g></svg>
              </p>
              <span className="text-[#efc99d] text-center">Help</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Team</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-center items-center w-full ">
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='m19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96M12 17l-4-4h2.55v-3h2.91v3H16z' opacity='.3'/><path fill='#efc99d' d='M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3m-5.55-8h-2.9v3H8l4 4l4-4h-2.55z'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Download APP</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='m12 13.9l1.5 1.15q.275.225.6.013t.2-.563l-.6-1.9l1.675-1.3q.275-.225.15-.563t-.475-.337H13.1l-.625-1.925q-.125-.35-.475-.35t-.475.35L10.9 10.4H8.925q-.35 0-.462.338t.162.562l1.625 1.3l-.6 1.925q-.125.35.175.563t.6-.013zM4 20q-.825 0-1.412-.587T2 18v-3.375q0-.275.175-.475t.45-.25q.6-.2.988-.725T4 12t-.387-1.175t-.988-.725q-.275-.05-.45-.25T2 9.375V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v3.375q0 .275-.175.475t-.45.25q-.6.2-.987.725T20 12t.388 1.175t.987.725q.275.05.45.25t.175.475V18q0 .825-.587 1.413T20 20z'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Activity</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M7 20.025V11h1.6q.175 0 .35.038t.35.087l6.925 2.575q.35.125.563.45t.212.675q0 .525-.363.85T15.8 16h-2.625q-.125 0-.187-.012t-.163-.063l-1.6-.625l-.325.975l1.925.675q.05.025.15.038t.175.012H20q.8 0 1.4.575T22 19l-7.975 3zM1 22V11h4v11zM14.5 8h1V7h-1zm-2 0h1V7h-1zm2 2h1V9h-1zm-2 0h1V9h-1zm6.025 4q-.35-.825-1-1.45t-1.6-.975L9 9H7V6.5l7-5l7 5V14z'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Agent Cooperation</span>
            </Link>
          </div>
          <div className="">
            <Link className="flex items-center flex-col" href={"#"} >
              <p className="flex bg-black justify-center border border-[#efc99d] rounded-full w-14 h-14 items-center">
                <svg viewBox='0 0 24 24' width='2em' height='2em' xmlns='http://www.w3.org/2000/svg' ><path fill='none' stroke='#efc99d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3m3 7l5-5m0 4.5V17h-4.5'/></svg>
              </p>
              <span className="text-[#efc99d] text-center">Invite Friends</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools