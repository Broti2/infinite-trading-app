import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/inf.png';

export default function Header() {
  return (
    <div className="fixed z-10 top-0 w-full">
      <header className=" w-full top-0 h-32 bg-[#10144F] text-white lg:px-20 px-9  ">
        <div className="justify-between  flex  ">
          <div className="logo py-6 w-[100px] h-[70px]">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className=" flex  space-x-8 lg:space-x-12">
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
                <Link href="/payment">
                  Payment
                </Link>
              </li>
            </ul>
            <Link className="max-sm:hidden" href="#">
              <div className="py-10 transition duration-500 ease-in-out hover:-translate-y-2 delay-150">
                <div className="w-[100px] h-[50px] text-xl rounded-md font-semibold  bg-gradient-to-r from-[--lcolor] to-[--rcolor] hover:from-[--rcolor] hover:to-[--lcolor] px-5 py-2">
                  <span className=" ">Demo</span>
                </div>
              </div>
            </Link>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
