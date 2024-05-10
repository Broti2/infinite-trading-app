import Image from 'next/image';
import robot from '../../public/assets/2new.png';
export default function About() {
  return (
    <div className='bg-[var(--bg)] w-[100%]'>
      <div className=" py-24  ">
        <div className="text-white  grid max-lg:grid-cols-1 grid-cols-2 gap-4">
          <div className="px-5 md:px-24">
            <p className="text-gray-400 text-lg">
              Welcome to Infinite Intelligence
            </p>
            <h3 className="font-extrabold text-4xl py-6">Algo Software.</h3>

            <div className="mb-3 text-gray-300 text-base font-extrabold ">
              Algo Trading In The Cloud In Makes easy.
            
            </div>
            
            <div className="mb-3 text-gray-300 text-base font-extrabold">
              AlgoTrader AG operates as a software development company.
              
            </div>
            
            <div className='mb-3 font-extrabold text-base text-gray-300'>
           
              AlgoTrader allows automation of complex and quantitative trading
              strategies in equity, forex, and derivative markets.
        
            </div>
          </div>
          <div className=" pr-24 max-sm:px-0 ">
            <div className=" w-full">
              <Image className="w-full transition duration-1000 delay-150 hover:scale-75" src={robot} alt="About Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
