'use client';
import React, { useState } from 'react';

import Banner from './components/Banner';
import About from './components/About';
import Image from 'next/image';
import check from '../public/assets/check-circle-svgrepo-com.svg';
import api from '../public/assets/api.png';
import algo from '../public/assets/algorithm.png';
import auto from '../public/assets/radio-waves.png';
import mql from '../public/assets/web-dev.png';
import marq1 from '../public/assets/Image-1.png';
import marq2 from '../public/assets/Image-2.png';
import marq3 from '../public/assets/Image-3.png';
import marq4 from '../public/assets/Image-4.png';
import marq5 from '../public/assets/zero.png';
import Marquee from 'react-fast-marquee';
import whywe from '../public/assets/why-we.jpg';
import Domain from './components/Domain';

export default function Home() {
  const arr = [
    { img: api, text: 'API BRIDGE' },
    { img: algo, text: 'ALGO TRADING' },
    { img: auto, text: 'AUTO BUY SELL' },
    { img: mql, text: 'MQL Devlopments' },
  ];

  const fast = [
    'Fast Trading',
    'Buy Sell Confusion',
    'Emotionless Trading',
    'Emotiones',
    'Remove Human Error',
    'Human Error',
    'Spent only 5 min',
    'Over Trading',
    'No Timing Problem',
    'Timing Problem',
  ];
  return (
    <>
      <Banner /> <About />
      <div className="w-full h-[420px] py-14 bg-[#101E52]">
        <h1 className="font-extrabold text-white text-center text-4xl py-10">
          Our Software Compatibility
        </h1>
        <div className="md:px-20 py-2 ">
          <Marquee autoFill speed={100} pauseOnHover>
            <div className=" h-[200px] ">
              <div className="bg-[#7E66F9]  h-5 flex space-x-72 px-40 relative">
                <div className="top-[-20px] absolute">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
                <div>
                  <div className=" w-6 h-5 ml-1  rounded-full top-[-3px]"></div>
                  <Image
                    className="h-19 w-10  absolute   drop-shadow-xl  rounded-full top-[-10px]"
                    alt="tick"
                    src={check}
                  />
                </div>
                <div>
                  <div className="bg-white w-6 h-5 ml-1  rounded-full top-[-3px]"></div>
                  <Image
                    className="h-19 w-10  absolute   drop-shadow-xl  rounded-full top-[-10px]"
                    alt="tick"
                    src={check}
                  />
                </div>
                <div>
                  <div className=" w-6 h-5 ml-1  rounded-full top-[-3px]"></div>
                  <Image
                    className="h-19 w-10  absolute   drop-shadow-xl  rounded-full top-[-10px]"
                    alt="tick"
                    src={check}
                  />
                </div>
                <div className="">
                  <div className="bg-white w-6 h-5 ml-1  rounded-full top-[-3px]"></div>
                  <Image
                    className="h-19 w-10  absolute   drop-shadow-xl  rounded-full top-[-10px]"
                    alt="tick"
                    src={check}
                  />
                </div>
              </div>
              <div className="space-x-28 h-auto flex  ">
                <Image
                  className="pr-10 ml-20 hover:scale-125 transform duration-700 delay-150"
                  height={120}
                  width={220}
                  alt=""
                  src={marq1}
                />
                <Image
                  className="py-5 hover:scale-125 transform duration-700 delay-150"
                  height={120}
                  width={220}
                  alt=""
                  src={marq2}
                />
                <Image
                  className="py-10 hover:scale-125 transform duration-700 delay-150"
                  height={120}
                  width={220}
                  alt=""
                  src={marq3}
                />
                <Image
                  className="py-5 hover:scale-125 transform duration-700 delay-150"
                  height={90}
                  width={250}
                  alt=""
                  src={marq4}
                />
                <Image
                  className="py-10 hover:scale-125 transform duration-700 delay-150"
                  height={120}
                  width={220}
                  alt=""
                  src={marq5}
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="bg-[--bg] w-full ">
        <div className="flex py-28 justify-center">
          <h1 className="text-4xl font-semibold text-white text-center w-[420px]">
            This is the way we make it happen.
          </h1>
        </div>
        <div className="w-full   flex flex-wrap px-5 md:px-20 pb-40 ">
          {arr.map((e, index) => (
            <div
              key={index}
              className=" px-10 md:mx-4 my-4 w-[47%] justify-center flex  bg-[--bg] max-sm:w-full relative  border-blue-800 py-14 transform hover:scale-110 delay-150 duration-700"
            >
              <div>
                <Image
                  className="mx-auto inset-0"
                  width={70}
                  height={70}
                  alt="api"
                  src={e.img}
                />
                <h1 className="text-3xl font-extrabold font-mono text-white pt-8">
                  {e.text}
                </h1>
              </div>
              <div
                style={{
                  position: 'absolute',
                  border: '4px solid transparent',
                  borderImage:
                    'linear-gradient(to right, var(--lcolor),var(--rcolor)) 1',
                  borderImageSlice: 1,
                  zIndex: -1,
                  borderRadius: '1rem',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="bg-[#10144F] md:flex px-5 md:px-20 md:space-x-14 py-28">
          <div className=" md:w-1/2 hover:scale-110 transform duration-700 delay-150">
            <Image alt="" src={whywe}></Image>
          </div>
          <div className=" md:w-1/2 text-white text-lg text-justify">
            <h1 className=" text-4xl font-semibold font-mono pb-5">Why We</h1>
            We aimed to furnish consistent access to market participants with
            secure and straightforward innovation solutions. We are capable with
            the trading software and programming of strategies. We execute our
            work with professional staff Our web- based Infinite Intelligence
            Algo terminal works with the leading brokers of India who those are
            providing facilities of API based trading. It is very simple system
            which gives your relief from watching charts all the time and it
            saves much time to do other tasks.. Infinite Intelligence Algo is
            India’s First Auto robot trading terminal which is base_d on a
            web-browser. It is preloaded with the best Infinite Intelligence
            Algo Such as Money Machine and Eagle trading system.
          </div>
        </div>
        <div className="bg-[#101E52] text-white md:px-20">
          <h1 className=" text-4xl text-center  py-20 font-extrabold   ">
            Fast Trading
          </h1>
          <div className="pb-20 md:flex flex-wrap">
            {fast.map((e, index) => (
              <div
                key={index}
                className="m-2 bg-[#007aff] bg-opacity-10 text-center text-xl font-semibold py-5 rounded-lg md:w-[48%] transform hover:scale-[.80] duration-1000 delay-150"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <Domain sty="lg:w-[305px]" />
        <div className="bg-[#007aff] bg-opacity-10 pt-10 pb-28 w-full  overflow-x-hidden  h-auto">
          <h1 className="text-white text-4xl font-semibold text-center py-10">
            What Clients are Saying
          </h1>
          <Marquee speed={100}>
            <div className=" ">
              <div className="h-4 bg-[#7E66F9] w-[1650px]  relative">
                <div className="top-[-20px] left-40  absolute ">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
                <div className="top-[-20px] right-40 absolute">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
                <div className="top-[-20px] right-[500px] absolute">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
                <div className="top-[-20px] right-[810px] absolute">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
                <div className="top-[-20px] left-[470px] absolute">
                  <div className="bg-white h-5 w-5   ml-3 mt-5"></div>
                  <div className="h-10 w-10">
                    <Image
                      alt="tick"
                      className="absolute h-full w-full  -top-3 left-1  rounded-full   "
                      src={check}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-[1650px]">
                <div className="text-center mr-5  ml-10 py-5 text-white w-[280px]">
                  <h1 className="text-xl py-3 font-semibold">Rahul Soni</h1>
                  <div>
                    &quot;Very well personally give information about share
                    market and teach you how to get profit&quot;
                  </div>
                </div>
                <div className="text-center mx-5  py-5 text-white w-[280px]">
                  <h1 className="text-xl py-3 font-semibold">Rahul Dixit</h1>
                  <div>
                    &quot;Very well personally give information about share
                    market and teach you how to get profit&quot;
                  </div>
                </div>
                <div className="text-center mx-5 py-5 text-white w-[280px]">
                  <h1 className="text-xl py-3 font-semibold">May 2022</h1>
                  <div>
                    &quot;While existing solution problem build a secure use
                    product based integration&quot;
                  </div>
                </div>
                <div className="text-center mx-5  py-5 text-white w-[280px]">
                  <h1 className="text-xl py-3 font-semibold">Vinay Joshi</h1>
                  <div>
                    &quot;Excelent analysis!! Being your client for many years,
                    I glad to follow your advice&quot;
                  </div>
                </div>
                <div className="text-center mx-5 py-5 text-white w-[280px]">
                  <h1 className="text-xl py-3 font-semibold">Ankit Kothari</h1>
                  <div>
                    &quot;I am getting appreciable response and assistance since
                    the time I subscribed to their services.&quot;
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="bg-[#007aff] bg-opacity-5 h-auto py-20 ">
          <div className="text-center ">
            <h1 className="text-gray-300 text-lg ">CONTACT US</h1>
            <h1 className="text-white font-semibold text-4xl pb-10 pt-5">
              Get in Touch
            </h1>
          </div>
          <form className="md:w-5/6 px-10 mx-auto flex flex-col items-center">
            <div className="w-full lg:flex">
              <input
                className="bg-[#007aff] bg-opacity-15 w-full lg:w-[32.2%] h-14 px-4  my-1 md:mx-1 lg:my-2"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-[#007aff] bg-opacity-15 w-full lg:w-[32.2%] h-14 px-4 my-1 md:mx-1 lg:my-2"
                type="text"
                placeholder="Your Email"
              />
              <input
                className="bg-[#007aff] bg-opacity-15 w-full lg:w-[32.2%] h-14 px-4  my-1 md:mx-1 lg:my-2"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="w-full  my-1 lg:px-4 h-44">
              <textarea
                className="px-5 py-3 bg-[#007aff] bg-opacity-15 w-full  h-full"
                name=""
                placeholder="Your Message"
                id=""
              ></textarea>
            </div>

            <button
              className="flex justify-center hover:py-12 transform duration-300 delay-150 py-10 w-full md:w-[220px] h-[50px]"
              type="submit"
            >
              <div className="py-4 bg-[#7309CA] hover:bg-[#fd7e14]   bg-opacity-100 rounded-md text-white text-lg w-[220px] h-[60px]">
                Submit Message
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
