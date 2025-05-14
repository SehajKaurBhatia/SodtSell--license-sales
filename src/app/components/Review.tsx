import React from 'react'
import { FaTags } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
const Review = () => {
  return (
    <div className='grid place-content-center '>
        <div className='md:w-full sm: w-screen'><p className='place-self-center text-[#CD4631] text-[45px] font-bold'>Why Choose Us</p>
    <div className='flex md:justify-around sm: justify-center self-center mt-10  md:gap-0 sm: gap-1'>
   <div className='flex flex-col gap-3 place-items-center bg-[#f6e8ca] shadow-xl md:p-5 sm: p-1'><FaTags className='md:w-[60px] md:h-[60px] ' /><p className='place-self-center  sm: text-[12px]'>Best Prices</p></div>
   <div className='flex flex-col gap-3 place-items-center bg-[#f6e8ca] shadow-xl md:p-5 sm: p-1'><FaRegClock className='md:w-[60px] md:h-[60px]' /><p className='place-self-center sm: text-[12px]'>Fast Transactions</p></div>
   <div className='flex flex-col gap-3 place-items-center bg-[#f6e8ca] shadow-xl md:p-5 sm: p-1'><GrSecure className='md:w-[60px] md:h-[60px]'/><p className='place-self-center sm: text-[12px]'>Secure Process</p></div>
   <div className='flex flex-col gap-3 place-items-center bg-[#f6e8ca] shadow-xl md:p-5 sm: p-1'><RiCustomerService2Fill className='md:w-[60px] md:h-[60px]'/><p className='place-self-center sm: text-[12px]'>Expert Support</p></div>
    </div>
    <div className='md:px-0 sm: px-2]10 sm: text-justify mt-10'>
        <p className='w-auto  flex items-center self-center gap-1 text-[18px] text-[#582a10]'><  FaRegCheckCircle className="w-[20px] h-[20px] sm: w-[40px]  text-[#CD4631]" />
        Get competitive offers for your unused software licenses, ensuring maximum value for your assets.

        </p>
        <p className='flex items-center self-center gap-1 text-[18px] text-[#582a10]'><  FaRegCheckCircle className="w-[20px] h-[20px] sm: w-[40px]  text-[#CD4631]" />
        Experience quick and seamless processing from quote to payment, saving your time and effort.
        </p>
        <p className='flex items-center self-center gap-1 text-[18px] text-[#582a10]'><  FaRegCheckCircle className="w-[20px] h-[20px] sm: w-[40px]  text-[#CD4631]" />
        Every transaction is handled with end-to-end encryption and strict compliance to keep your data safe.

        </p>
        <p className='flex items-center self-center gap-1 text-[18px] text-[#582a10]'><  FaRegCheckCircle className="w-[20px] h-[20px] sm: w-[40px] text-[#CD4631]" />
        Our knowledgeable support team is always available to guide you through each step of the selling process.

        </p>
    </div>
    </div>
    <div className='md:w-auto sm: w-screen flex flex-col'><p className='md:ml-0 font-semibold md:text-[30px] sm: text-[25px] sm: ml-30 text-[#CD4631] mt-10'>Customer Testimonials</p>
    <div className='flex md:flex-row  sm: flex-col   mt-5 gap-5'>
        <div className='md:ml-0 sm: ml-1 sm: w-fit rounded-[10px] py-5 md:px-4 bg-[#f9eab8] shadow-xl '>
        <p className=' px-5 font-medium text-[28px] text-[#CD4631]'>Rahel H.</p>
<p className='px-5 font-semibold'>CIO</p>
<p className='md:w-[600px] sm: w-screen text-justify p-5 md:text-[16px] sm: text-[12px]'>SoftSell provided an excellent offer for our unused software licenses, far better than we initially expected. The entire process—from evaluation to final transaction—was streamlined, transparent, and completed with impressive speed. Their team ensured everything was handled smoothly, making it a hassle-free experience for us.

</p>
        </div>
        <div className='md:ml-0 sm: ml-1 sm: w-fit rounded-[10px] py-5 md:px-4 bg-[#f9eab8] shadow-xl'>
        <p className='px-5 font-medium text-[28px] text-[#CD4631]'>Mark T.</p>
<p className='px-5 font-semibold '>Operations. Company B</p>
<p className='md:w-[600px] sm: w-screen text-justify p-5 md:text-[16px] sm: text-[12px]'>I was genuinely impressed by the level of professionalism and prompt service provided by Sot Sell. The entire transaction was handled efficiently, and we received the payment much faster than anticipated. Their responsiveness and clear communication throughout the process make them a highly recommended partner.

</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Review