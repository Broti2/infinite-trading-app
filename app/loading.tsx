import React from 'react';
import load from '../public/assets/preloader.png';
import Image from 'next/image';
export default function Loading() {
  return (
    <div className="absolute z-50 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
      <Image className="animate-spin" alt="load" src={load}></Image>
    </div>
  );
}
