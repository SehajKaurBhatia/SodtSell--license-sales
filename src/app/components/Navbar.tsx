'use client'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-[#ce6151]'>
    <div className=" bg-[#ce6151] shadow-xl w-full fixed  top-0 left-0 z-50">
      <div className="mt-0 flex justify-between items-center px-5 py-4 text-[#F8F2DC] font-semibold text-[20px]">
        <Link href="/" className="text-xl font-bold">SoftSell</Link>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>

       
        <nav className="hidden md:flex gap-8">
          {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `#${item}`}>
              <span className="relative  hover:text-[#ebc64c] transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-[#ebc64c] hover:after:w-full after:transition-all after:duration-300">
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-[#F8F2DC] text-lg bg-[#ce6151] transition-all duration-300 ease-in-out">
          {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `#${item}`} onClick={() => setIsOpen(false)}>
              <span className="hover:text-[#ebc64c] transition duration-300">{item}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}
