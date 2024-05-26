import React from 'react';
import whatapp from '../../public/assets/whatsapp-svgrepo-com.svg';
import Image from 'next/image';
import telegram from '../../public/assets/telegram-svgrepo-com.svg';
import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="  bg-transparent fixed bottom-10 right-4">
      <Link href={'https://wa.me/+917646870428'} target="blank">
        {' '}
        <Image className="py-5" width={50} alt="" src={whatapp} />
      </Link>
      <Link href={'https://web.telegram.org/a/#5891460787'} target="blank">
        {' '}
        <Image width={50} alt="" src={telegram} />
      </Link>
    </div>
  );
}
