"use client"
import React from 'react'
import {motion} from "framer-motion"
import { useEffect, useState } from 'react';
import Link from 'next/link';
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col  " >
            
       
    <div className='grid place-items-center gap-5 mt-10'>
        <h1 className='font-bold text-[#CD4631] text-[46px]'>Turn Your Unused Software Licenses Into Cash</h1>
        <p className='text-[25px] text-[#bd835c]'>Sell your surplus licenses quickly and easily.</p>
      <Link href="#Services"> <button className=' bg-[#CD4631] p-2 rounded-[10px] text-[#F8F2DC] font-medium hover:bg-[#9E6240] transition duration-200 cursor-pointer'>Sell My Licenses</button>
        </Link>
        </div>
        <div className="bg-[url('/icons/bkg.png')] py-10 h-[385px]">
        <motion.div
  initial={{ x: 0, opacity: 1, scale: 1 }}
  animate={
    isMobile?{x:0}:
    {x: [0, 1000]} }
  transition={ isMobile?{}:
    {repeat: Infinity,
    repeatType: "loop",
    duration: 5, 
    ease: "linear" 
  }}
  className=" md:w-[300px] sm: w-screen h-auto bg-[#CD4631]  border-1 rounded-lg shadow-lg"
>
  <p className="text-center text-[#e9dcad]  font-bold">Adobe License</p>
<motion.img src="/icons/license.jpg"
alt=""
className='w-fit h-fit  rounded-lg'/>
  <motion.img
    src="/icons/images.png"
    alt="Cash"
    className="absolute  bottom-[-50px] right-[-50px] w-[100px]"
    animate={
      isMobile?{x:[-20,-80,-20],y:[210,210,210]}:{ x: [0, 30, 0], y: [0, -10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }}
  />
</motion.div>

        </div>
        </div>
  )
}

export default Hero