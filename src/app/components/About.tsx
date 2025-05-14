import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col'>
        <p>Our Goal</p>
        <p>hfuwehfuwehfuwhefuhfuehufheuhf</p>
        <p>Meet The Team</p>
        <div className='flex md:flex-row sm: flex-col justify-around items-center gap-5'>
        <div className='flex flex-col'>
        <Image src="/woman.webp" alt="" width={100} height={100}></Image>
            <p>Author 1</p>
           
            <p>hdewgfueg</p>
        </div>
        <div className='flex flex-col'>
        <Image src="/woman.webp" alt="" width={100} height={100}></Image>
            <p>Author 2</p>
           
            <p>hdewgfueg</p>
        </div>
        <div className='flex flex-col'>
        <Image src="/woman.webp" alt="" width={100} height={100}></Image>
            <p>Author 3</p>
           
            <p>hdewgfueg</p>
        </div>
        </div>
    </div>
  )
}

export default About