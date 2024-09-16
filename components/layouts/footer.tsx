'use client';

import React, {useState} from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2a2b31] w-full flex flex-row justify-between bottom-0 z-20">
      <div className="flex flex-row w-full justify-between items-center bottom-0 py-3">
          <div className="flex pl-4">
            <button className="flex items-center flex-col" >
              <svg viewBox='0 0 24 24' width={28} height={28} xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' fill-rule='evenodd' d='M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093C5.724 22 7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012c1.175-1.012 1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083c-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2c-1.154 0-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75' clip-rule='evenodd'/></svg>
              <span className="text-[#efc99d]">Home</span>
            </button>
          </div>
          <div className="flex">
            <button className="flex items-center flex-col" >
              <svg viewBox='0 0 24 24' width={28} height={28} xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' fill-rule='evenodd' d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096' clip-rule='evenodd'/><path fill='#efc99d' d='M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z'/></svg>
              <span className="text-[#efc99d]">Quantity</span>
            </button>
          </div>
          <div className="flex">
            <button className="flex items-center flex-col" >
              <svg width={28} height={28} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009c.133-.231.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91c.168.101.32.223.45.368a1.492 1.492 0 0 1-.126 2.134a.998.998 0 0 1-.427.24c.12-.014.235-.03.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075c-.573.53-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15.031 15.031 0 0 0-3.017-.308m.326-18.803c-.367.367-.504.873-.555 1.664A2.25 2.25 0 0 0 8.25 2.03c-.79.052-1.297.189-1.664.556m10.828 0c-.367-.367-.873-.504-1.664-.555a2.25 2.25 0 0 0 2.22 2.219c-.052-.79-.189-1.297-.556-1.664m0 6.828c-.367.367-.873.504-1.664.555a2.25 2.25 0 0 1 2.22-2.219c-.052.79-.189 1.297-.556 1.664m-10.828 0c.367.367.873.504 1.664.555A2.25 2.25 0 0 0 6.03 7.75c.052.79.189 1.297.556 1.664'/><path fill='#efc99d' fill-rule='evenodd' d='M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2' clip-rule='evenodd'/></svg>
              <span className="text-[#efc99d]">Invest</span>
            </button>
          </div>
          <div className="flex">
            <button className="flex items-center flex-col" >
              <svg viewBox='0 0 24 24' width={28} height={28} xmlns='http://www.w3.org/2000/svg' ><path fill='#efc99d' d='M3.464 3.464C4.93 2 7.286 2 12 2c1.023 0 1.934 0 2.75.015c.004.57.223 1.14.659 1.576l1.159 1.159H14c-2.617 0-4.252 1.298-4.914 1.963L8.9 6.9l-.187.186C8.048 7.748 6.75 9.383 6.75 12v3a2.25 2.25 0 0 0 4.5 0v-3c0-1.02.488-1.576.637-1.725l.192-.19l.196-.198c.149-.149.705-.637 1.725-.637h2.568l-1.159 1.159a2.25 2.25 0 1 0 3.182 3.182l3.405-3.405C22 10.749 22 11.352 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536'/><path fill='#efc99d' fill-rule='evenodd' d='M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.19.191l-.193.191c-.322.32-1.079 1.236-1.079 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.189l.188-.189C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06' clip-rule='evenodd'/></svg>
              <span className="text-[#efc99d]">home</span>
            </button>
          </div>
          <div className="flex pr-4">
            <button className="flex items-center flex-col" >
              <svg viewBox='0 0 24 24' width={28} height={28} xmlns='http://www.w3.org/2000/svg' ><g fill='none' stroke='#efc99d' stroke-width='1.5'><circle cx='12' cy='6' r='4'/><ellipse cx='12' cy='17' rx='7' ry='4'/></g></svg>
              <span className="text-[#efc99d]">home</span>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Footer;