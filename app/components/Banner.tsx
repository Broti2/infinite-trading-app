'use client';
import Image from 'next/image';
import banner from '../../public/assets/banner-inf.jpeg';

import { useState } from 'react';
import Link from 'next/link';
import Payment from './Qr';
export default function Banner() {
  const [isOpen, setisOpen] = useState('hidden');
  return (
    <>
      <div>
        <div className=" h-[850px]  ">
          <div className="w-full">
            <Image
              className="h-[850px] max-[375px]:w-full absolute z-[-1] top-12 w-full "
              src={banner}
              alt=""
            />
          </div>
        </div>

        <button
          onClick={() => {
            isOpen == '' ? setisOpen('hidden') : setisOpen('');
          }}
          className="  top-[50%] -translate-x-16 z-10   fixed -rotate-90  "
        >
          {/* -90 degree button  */}
          <div className="text-white w-[190px] h-[40px] text-lg border-solid border-[3px] border-[#c69c6d] rounded-full   bg-gradient-to-r from-[--lcolor] to-[--rcolor] hover:from-[--rcolor] hover:to-[--lcolor] px-6 py-1">
            <span className=" ">Quick Payment</span>
          </div>
        </button>

        {/* banner text */}
        <div className="absolute z-0 top-[350px] max-sm:top-[35%]  left-24 text-white md:w-[600px]">
          <h1 className="font-semibold text-xl py-4">
            100+ strategy development
          </h1>
          <h1 className="font-bold text-4xl pb-4">Flexible Platform</h1>
          <h1 className="font-normal text-base text-gray-300">
            This is technical analysis software, developed for buy sell signal.
            Easy to use & most convenient.
          </h1>
          <div className="md:flex space-x-8">
            <Link href="#">
              <div className="py-6 transition duration-300 delay-150   hover:-translate-y-2 ">
                <div className="w-[170px] h-[55px] text-xl rounded-md font-semibold  bg-gradient-to-r from-[--lcolor] to-[--rcolor] hover:from-[--rcolor] hover:to-[--lcolor] px-5 py-3">
                  <span className=" ">Our Services</span>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="md:py-6  transition duration-300 delay-150   hover:-translate-y-2 ">
                <div className="w-[170px]   h-[55px] text-xl rounded-md font-semibold  bg-gradient-to-r from-[--lcolor] to-[--rcolor] hover:from-[--rcolor] hover:to-[--lcolor] px-6 py-3">
                  <span className=" ">Demo Video</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={` center  w-full `}>
        <div
          className={`${isOpen} fixed z-50  w-full h-full  backdrop-blur-lg  top-0`}
        >
          <div className="h-[570px] w-[420px] bg-white mx-auto my-10">
            <button
              className="float-right px-5 py-2 bg-gray-300 text-xl "
              onClick={() => {
                isOpen == '' ? setisOpen('hidden') : setisOpen('');
              }}
            >
              X
            </button>
            <Payment w="w-full" h="h-[420px]" />
          </div>
        </div>
      </div>
    </>
  );
}
