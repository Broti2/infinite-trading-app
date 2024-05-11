'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/inf.png';
import menu from '../../public/assets/menu-svgrepo-com.svg';
import { useState } from 'react';
export default function Header() {
  const [men, setmenu] = useState('hidden');
  return (
    <div className="fixed z-10 top-0 w-full">
      <header className=" w-full top-0 h-32 bg-[#10144F] text-white max-sm:px-3 md:px-14 lg:px-20 px-9  ">
        <div className="justify-between  flex  ">
          <div className="logo py-6 w-[100px] h-[70px]">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className=" flex  md:space-x-8 lg:space-x-12">
            <ul className="py-14 flex max-md:hidden  space-x-12 text-lg ">
              <li className="menu-item">
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/payment">Payment</Link>
              </li>
            </ul>
            <Link className="max-sm:hidden" href="#">
              <div className="py-10 transition duration-500 ease-in-out hover:-translate-y-2 delay-150">
                <div className="w-[100px] h-[50px] text-xl rounded-md font-semibold  bg-gradient-to-r from-[--lcolor] to-[--rcolor] hover:from-[--rcolor] hover:to-[--lcolor] px-5 py-2">
                  <span className=" ">Demo</span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => {
                setmenu('');
              }}
              className={`${!men ? 'hidden ' : ''} md:hidden py-10`}
            >
              <Image alt="" width={30} src={menu}></Image>
            </button>
            <button className=" py-10">
              <div
                onClick={() => {
                  setmenu('hidden');
                }}
                className={!men ? '' : 'hidden ' + ' text-6xl text-white '}
              >
                X
              </div>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`${men} bg-[--bg] text-white h-auto w-full absolute top-32  flex-col flex `}
      >
        <Link
          className="w-full h-10 py-2 px-5 border-b-[1px] border-t-[1px]  border-blue-500 border-opacity-30 hover:bg-opacity-20 hover:bg-blue-500"
          href={'/'}
        >
          Home
        </Link>
        <Link
          className="w-full h-10 py-2 px-5 border-b-[1px] border-t-[1px]  border-blue-500 border-opacity-30 hover:bg-opacity-20 hover:bg-blue-500"
          href={'/about'}
        >
          About
        </Link>
        <Link
          className="w-full h-10 py-2 px-5 border-b-[1px] border-t-[1px]  border-blue-500 border-opacity-30 hover:bg-opacity-20 hover:bg-blue-500"
          href={'/services'}
        >
          Services
        </Link>
        <Link
          className="w-full h-10 py-2 px-5 border-b-[1px] border-t-[1px]  border-blue-500 border-opacity-30 hover:bg-opacity-20 hover:bg-blue-500"
          href={'/payment'}
        >
          Payment
        </Link>
      </div>
    </div>
  );
}
