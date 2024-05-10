import React from 'react';
import logo from '../../public/assets/inf.png';
import Image from 'next/image';
import Link from 'next/link';
import fb from '../../public/assets/facebook-svgrepo-com.svg';
import twitter from '../../public/assets/twitter-color-svgrepo-com.svg';
import telegram from '../../public/assets/telegram-svgrepo-com.svg';
export default function Footer() {
  return (
    <div className="md:flex bg-[--bg] md:px-40 py-20 text-white justify-between">
      <div className="h-auto  ">
        <div className="w-[200px] h-[200px]">
          <Image alt="" src={logo} />
        </div>
        <div className='flex h-16  w-52 py-3 px-5'>
          <Link className='mx-3' href={'#'}><Image className='hover:shadow-orange-400 shadow-xl  hover:scale-110' alt='' src={fb}/></Link>
          <Link className='mx-3' href={'#'}><Image className='hover:shadow-orange-400 shadow-xl hover:scale-110' alt='' src={twitter}/></Link>
          <Link className='mx-3' href={'#'}><Image className='hover:shadow-orange-400 shadow-xl hover:scale-110' alt='' src={telegram}/></Link>
        </div>
      </div>
      <div className=" text-center">
        <h1 className='text-2xl py-2 font-semibold'>Useful Link</h1>
        <ul className="text-center text-lg text-gray-400 ">
          <Link href={'#'}><li className='hover:text-purple-700'>Home</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>About</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>Services</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>Contacts us</li></Link>
        </ul>
        <p className="py-10 text-gray-400">CopyRight © 2024 All Rights Reserved</p>
      </div>
      <div className="text-center">
        <h1 className='text-2xl py-2 font-semibold'>Our Policies</h1>
        <ul className="text-center text-lg text-gray-400 ">
          <Link href={'#'}><li className='hover:text-purple-700'>Terms & Conditions</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>Disclamier</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>Privacy Policy</li></Link>
          <Link href={'#'}><li className='hover:text-purple-700'>Refund Policy</li></Link>
        </ul>
        <p className="pt-10 text-gray-400 ">contact@infiniteintelligence.tech</p>
        <p className='text-gray-400'>+91 7880115246 / 7880005644 </p>
      </div>
    </div>
  );
}
