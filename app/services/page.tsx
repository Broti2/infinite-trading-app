import React from 'react'
import banner from './services.png';
import Image from 'next/image';
import api from '../../public/assets/api.png';
import algo from '../../public/assets/algorithm.png';
import auto from '../../public/assets/radio-waves.png';
import domain3 from '../../public/assets/03.png';
import Domain from '../components/Domain';
export default function Services() {
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
    <div className='bg-[--bg] bg-opacity-15'>
      <div>
        <div className='pt-24  h-[476px] overflow-hidden'>
          <Image className='h-full w-[1500px]' alt="" src={banner} />
        </div>
        <div className='text-white absolute left-20 top-60'> <h1 className='text-[2.5rem] font-extrabold font-mono'>Services</h1><p>Home - Services</p></div>
      </div>
      <Domain style=""/>
    </div>
  )
}
