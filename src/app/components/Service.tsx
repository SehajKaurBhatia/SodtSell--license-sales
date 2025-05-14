"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const Service = () => {
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const [isComplete, setIsComplete] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count);
      if (count >= 100) {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 15);
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  return (
    <>
    <div className='grid place-items-center gap-5'>
        <p className='font-bold text-[#CD4631] text-[35px]'>How It Works</p>
        <div className='w-full p-5 bg-[#f6e8ca]'>
        <div className=' flex justify-around md:gap-50 sm: gap-5'>

       <div className='flex flex-col'> <Image src="/icons/upload.png" alt="" width={100} height={100}></Image>
        <p className='place-self-center font-medium text-[#9e6240]'>Upload License</p></div>
        <div className='flex flex-col place-self-center'> <Image src="/icons/evaluation.png" alt="" width={100} height={100}></Image>
        <p className='place-self-center font-medium text-[#9e6240]'>Get Evaluation</p>
        </div>
        <div className='flex flex-col'><Image src="/icons/dollar.png" alt="" width={100} height={100}></Image>
        <p className='place-self-center font-medium text-[#9e6240]'>Get Paid</p>
       </div>
        </div>
        </div>
        <div className='mt-5  flex md:flex-row sm: flex-col justify-around md:gap-60'>
          <div className='flex  flex-col gap-3'>
            <p className=' font-semibold text-[30px] text-[#CD4631]'>Upload License</p>
            <div className='bg-[#ecc78f] rounded-[10px] p-3 md:w-fit  shadow-xl'><input type='file' className="file:mr-4 file:py-2 file:px-4
             file:rounded-[10px] file:border-0
             file:text-sm file:font-semibold
             file:bg-[#6a4640] file:text-[#F8F2DC]
             hover:file:bg-[#9E6240]
             bg-[#e9c88b] text-[#543827] rounded-[10px]" />
            
             </div>
             {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-[#CD4631] w-[100px] text-[#F8F2DC] font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-[#9E6240] "
        >
          Submit
        </button>
      )}
             </div>
            <div className=' '>
              <p className='flex-start font-semibold text-[30px] text-[#CD4631]'>Get Score</p>
             
      {submitted && (
        <div className="relative w-40 h-40">
          <svg className="w-full h-full">
            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="#eee"
              strokeWidth="10"
              fill="none"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="60"
              stroke="#CD4631"
              strokeWidth="10"
              fill="none"
              strokeDasharray={377} // 2 * π * r
              strokeDashoffset={377}
              animate={controls}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#CD4631] text-xl font-bold">
            {progress < 100 ? `${progress}%` : <FaCheck size={40} />}
          </div>
        </div>
      )}
    </div>
    {isComplete && (
        <motion.div
          className="text-center px-6 py-4 rounded-lg shadow-md bg-[#f6e8ca] text-[#CD4631]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="font-semibold text-[30px]">Cost Estimate</p>
          <p className="text-md mt-2 font-medium text-[#9e6240]">₹5,200 credited for your license</p>
        </motion.div>
      )}
        </div>
        </div>
        
        </>
  )
}

export default Service