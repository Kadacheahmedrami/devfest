'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Short from '../components/shortcut'

const Hero = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Cycle through each item every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='absolute w-full  h-[600px]'>

    <div className='ml-[5%] mt-[12%] '>    <Short src="./message.svg" alt="message"/></div>
    <div className='ml-[90%] '>        <Short  src="./message.svg" alt="chart"/></div>
    <div className='ml-[12%] mt-[3%]'>      <Short  src="./chart.svg" alt="./"/></div>
    <div className='ml-[80%]  '>     <Short  src="./message.svg" alt="./"/></div>
  
   
    </div>
      <div className='p-[20px] t-120-m w-full text-Start md:text-center  flex flex-col mt-[5.8%] relative'>
        <div className=''>
            
          Transform Challenges  
        </div>
   
        <div className='h-[150px]  md:ml-[25%] md:mr-[75%] mt-[-3%] gap-4 flex flex-col  md:flex-row w-full'>
              {/* Apply animation to the visible text */}
              Into
              <div className=''>
              <div
          className={`absolute  t-120-b text-blue-5  ${visibleIndex === 0 ? 'animate-show' : 'animate-hide'}`}
      
        >
          Opportunities.
        </div>
        <div
          className={`absolute  t-120-b text-blue-5  ${visibleIndex === 1 ? 'animate-show' : 'animate-hide'}`}
        
        >
          Gains
        </div>
        <div
          className={`absolute  t-120-b text-blue-5  ${visibleIndex === 2 ? 'animate-show' : 'animate-hide'}`}
         
        >
          Profit
        </div>
              </div>
       
        </div>
      
      </div>

   
      <style jsx>{`
        .animate-show {
          animation: fadeInUp 1s ease-in-out forwards;
        }

        .animate-hide {
          animation: fadeOutDown 1s ease-in-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
            @keyframes fadeOutDown {
                0% {
                  opacity: 1;
                  transform: translateY(0px);
                }
                100% {
                  opacity: 0;
                  transform: translateY(-20px);
                }
              }
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
