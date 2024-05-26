import Image from 'next/image'
import React from 'react'
import api from '../../public/assets/api.png';
import algo from '../../public/assets/algorithm.png';
import auto from '../../public/assets/radio-waves.png';
import domain3 from '../../public/assets/03.png';
export default function Domain(sty:any) {
    const domain = [
        {
          img: api,
          head: 'API BRIDGE',
          text: 'An API is a set of programming code that enables data transmission between one software product and another. It is standardized technology that allows different applications to "talk" to each other.',
        },
        {
          img: algo,
          head: 'ALGO TRADING',
          text: 'Algo Trading is a form of automated trading that uses computer programs to analyze market data based on pre-defined parameters.',
        },
        {
          img: auto,
          head: 'AUTO BUY SELL',
          text: 'Auto Buy Sell Signal Software that provides you an automatic Buy and Sell alert on your screen. Scalping and day trading is very risky and so you need to act very fast to be profitable.',
        },
        {
          img: domain3,
          head: 'MQL Devlopments',
          text: 'Successful trading starts with convenient and functional trading. MetaTrader 4 / MetaTrader 5 is the best choice for the modern trader.',
        },
      ];
  return (
    <div>
      <div className="text-white max-sm:px-5 px-20 py-20">
          <h1 className="pb-10 text-4xl text-center font-extrabold">
            Our Main Domain.
          </h1>
          <div className="flex flex-wrap  ">
            {domain.map((e, index) => (
              <div
                key={index}
                className={`mx-auto pt-14 pb-28 px-5 max-sm:w-full md:w-[47%] ${sty}  justify-items-center gradient-border m-2 hover:scale-110 transition duration-700 delay-150`}
              >
                <Image className="mx-auto " alt="" src={e.img}></Image>
                <h1 className="py-6 text-2xl font-semibold">{e.head}</h1>
                <div>{e.text}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
