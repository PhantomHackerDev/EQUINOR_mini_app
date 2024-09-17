"use client";

import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface DexProps {
  className?: string;
  activeClassName?: string;
  networkName: string;
  children: React.ReactNode;
}

const DEx: FC<DexProps> = ({
  className,
  activeClassName,
  networkName,
  children,
  ...props
}) => {
  // const router = useRouter();
  // console.log(router);
  
  const isActive = networkName === 'binance';

  return (
    <button>
      <span className={isActive ? activeClassName : className}>
        {children}
      </span>
    </button>
  );
};

export default DEx;
