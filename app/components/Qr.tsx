import React from 'react';
import pay from '../../public/assets/payment.jpg';
import Image from 'next/image';
export default function Qr( w:any, h:any ) {
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 px-8">QR CODE </h1>
      <Image className={`mx-auto ${w} ${h}`} src={pay} alt=""></Image>
      <h1
        className="text-xl font-semibold text-gray-500 text-center
              "
      >
        UPI ID: algobullstechnologies@sbi
      </h1>
    </div>
  );
}
