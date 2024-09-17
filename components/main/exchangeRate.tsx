'use client';

import React, {useState, useEffect} from "react";
import Rate from "./rate";

const ExchangeRate: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-row w-full px-7 py-2 rounded-full bg-gradient-to-b from-[#1c1c1c] to-black justify-between">
        <p className="text-[#efa646] text-sm">Currency</p>
        <p className="text-[#efa646] text-sm">{`Last Price($)`}</p>
        <p className="text-[#efa646] text-sm">{`24h Rise & Down`}</p>
      </div>
      <div className="flex flex-col w-full bg-[#1e1f23] rounded-2xl">
        <ul className=" max-w-full px-7 divide-y divide-dashed divide-[#794d2c]">
          <li className="py-4">
            <Rate imgSrc="/img/crypto/bitcoin.png" pairA="BTC" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/ether.png" pairA="ETH" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/bnb.png" pairA="BNB" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/xrp.png" pairA="XRP" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/ada.png" pairA="ADA" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/sol.png" pairA="SOL" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/doge.png" pairA="DOGE" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/dot.png" pairA="DOT" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/ltc.png" pairA="LTC" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/trx.png" pairA="TRX" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/shb.png" pairA="SHIB" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
          <li className="py-4">
            <Rate imgSrc="/img/crypto/avax.png" pairA="AVAX" pairB="USDT" coinValue = "57772.26" exchangeRate="3.88%" plus = "-" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExchangeRate;