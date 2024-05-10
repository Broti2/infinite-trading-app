import React from 'react';
import banner from './6.png';
import photo from './about1.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div>
        <div className='pt-24  h-[476px] overflow-hidden'>
          <Image className='h-full w-[1500px]' alt="" src={banner} />
        </div>
        <div className='text-white absolute left-20 top-60'> <h1 className='text-[2.5rem] font-extrabold font-mono'>ABOUT US</h1><p>Home - About Us</p></div>
      </div>
      <div className='h-auto py-20 lg:px-20 bg-[#080C49] bg-opacity-95 md:flex '>
        <div className='md:w-1/2 m-5 space-y-4  text-gray-300 text-xl text-justify'>
       <p> We are a programming and algorithmic based solution company providing services in specific domains of the Indian Financial Market. Our point is to furnish API based automated software with 100% deployment. Our product has great risk management procedures with trade monitoring.</p>

<p>We are empowering you to utilize a completely robotized exchanging framework connected with your Brokerage accounts through API to accomplish the additional mile for your independence from the rat race.</p>

<p>We have a capable and ever learning team determined to accomplish any objective for our clients. We fabricate algo trading software that empowers us to beat inflation effectively and with low risk issues that empowers us to make money work for us.</p>
        </div>
        <div className='md:w-1/2 m-5 transform hover:scale-110 delay-150 duration-1000'>
          <Image alt='' src={photo} />
        </div>
      </div>
    </div>
  );
}
