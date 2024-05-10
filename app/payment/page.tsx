import React from 'react';
import banner from './8new.png';
import Image from 'next/image';
import logo from '../../public/assets/inf.png';
import pay from '../../public/assets/payment.jpg';
export default function Payment() {
  return (
    <div>
      <div className="bg-[--bg] bg-opacity-15">
        <div>
          <div className="pt-24  h-[476px] overflow-hidden">
            <Image className="h-full w-[1500px]" alt="" src={banner} />
          </div>
          <div className="text-white absolute left-20 top-60">
            {' '}
            <h1 className="text-[2.5rem] font-extrabold font-mono">PAYMENT</h1>
            <p>Home - Payment</p>
          </div>
        </div>
        <div className=" pt-28">
          <div className="md:w-10/12 h-auto md:h-[750px] mx-auto py-10 md:flex  bg-gradient-to-r from-[#0d6efd] to-[#0dcaf0]">
            <div className="md:w-[46%] md:pl-10 text-center text-white">
              <Image className="mx-auto" alt="" width={200} src={logo}></Image>
              <p className="font-[700] text-xl font-sans">
                UPI ID: manish1991rishikesh-4@okaxis
              </p>
              <h1 className="text-2xl font-extrabold font-sans py-2">
                Use the QR Code to transfer any amount
              </h1>
              <div className="h-[400px] md:w-[300px] bg-white mx-auto my-7">
                <h1 className="text-xl text-black font-semibold pt-8 ">
                  QR CODE{' '}
                </h1>
                <Image
                  className={`mx-auto md:w-[250px] md:h-[250px]`}
                  src={pay}
                  alt=""
                ></Image>
                <h1
                  className="text-sm text-gray-500 text-center
              "
                >
                  UPI ID: algobullstechnologies@sbi
                </h1>
                <p className='text-gray-500 text-xs py-10'>Scan to pay with any upi</p>
              </div>
            </div>
            <div className="md:w-[53%] h-auto md:h-[700px]  text-white md:pr-10 pt-10">
              <div className='w-full h-2/3 px-4 md:px-8 py-10  bg-[#0d6efd]'>
                <h1 className='text-3xl md:text-5xl font-sans font-extrabold'>Pay Account</h1>
                <h1 className='md:text-2xl font-sans font-extrabold py-2'>Account Name: INFINITE INTELLIGENCE</h1>
                <h1 className='md:text-2xl font-sans font-[700] py-5'>Axis Bank Account Number: 922020040517727</h1>
                <h1 className='md:text-2xl font-sans font-[700] py-5'>IFSC Code: UTIB0000568</h1>
                <h1 className='md:text-2xl font-sans font-[700]'>UPI ID: manish1991rishikesh-4@okaxis</h1>
                <button
              className="flex justify-center hover:py-12 transform duration-300 delay-150 py-10 w-full md:w-[220px] h-[50px]"
              type="submit"
            >
              <div className="py-4 bg-[#7309CA] hover:bg-[#fd7e14]   bg-opacity-100 rounded-md text-white text-lg w-[220px] h-[60px]">
                Submit Message
              </div>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
