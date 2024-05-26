import React from 'react';
import banner from './services.png';
import Image from 'next/image';
import Domain from '../components/Domain';

export default function Services() {
  return (
    <div className="bg-[--bg] bg-opacity-15">
      <div>
        <div className="pt-24  h-[476px] overflow-hidden">
          <Image className="h-full w-[1500px]" alt="" src={banner} />
        </div>
        <div className="text-white absolute left-20 top-60">
          {' '}
          <h1 className="text-[2.5rem] font-extrabold font-mono">Services</h1>
          <p>Home - Services</p>
        </div>
      </div>
      <Domain sty="" />
    </div>
  );
}
