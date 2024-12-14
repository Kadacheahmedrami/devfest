'use client'

//welcome to our website page with simpel anmation 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter(); 


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.getElementById('welcome-text');
    if (element) observer.observe(element);

    
    const timer = setTimeout(() => {
      router.push('/pages/dash');
    }, 1000); 

    return () => {
      if (element) observer.unobserve(element);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="t-120-b w-full gap-10 h-full flex mb-[10%] flex-row justify-center items-center">
      <div
        id="welcome-text"
        className={`transition-all duration-1000 gap-10 ease-out  flex flex-row ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
        }`}
      >
        <div>Welcome to</div>
        <div className="text-blue-5">Boostify.</div>
      </div>
    </div>
  );
};

export default Welcome;
