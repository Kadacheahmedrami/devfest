'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Short from './shortcut'

const Hero = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='absolute w-full  h-[600px]'>

    <div className='ml-[5%] mt-[12%] '>    <Short src="./message.svg" alt="message"/></div>
    <div className='ml-[90%] '>        <Short  src="./chart.svg" alt="chart"/></div>
    <div className='ml-[12%] mt-[3%]'>      <Short  src="./svg/dollar.svg" alt="dollar"/></div>
    <div className='ml-[80%]  '>     <Short  src="./message.svg" alt="./"/></div>
  
   
    </div>
      <div className='p-[20px] t-120-m w-full text-Start md:text-center  flex flex-col mt-[5.8%] relative'>
        <div className=''>
            
          Transform Challenges  
        </div>
   
        <div className='h-[150px]  md:ml-[25%] md:mr-[75%] mt-[-3%] gap-4 flex flex-col  md:flex-row w-full'>
           
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
          Achivments
        </div>
        <div
          className={`absolute  t-120-b text-blue-5  ${visibleIndex === 2 ? 'animate-show' : 'animate-hide'}`}
         
        >
          Money :)
        </div>
              </div>
       
        </div>
      
      </div>

   
  
    </>
  );
};

export default Hero;
