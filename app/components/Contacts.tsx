import React from 'react';
import whatapp from '../../public/assets/whatsapp-svgrepo-com.svg';
import Image from 'next/image';
import telegram from '../../public/assets/telegram-svgrepo-com.svg';
import Link from 'next/link';


export default function Contacts() {
  return (
    <div className="w-20  bg-transparent fixed bottom-10 -right-4">
     <Link href={'#'}> <Image className="py-5" width={50} alt="" src={whatapp}></Image></Link>
     <Link href={'#'}> <Image width={50} alt="" src={telegram}></Image></Link>
    </div>
  );
}
