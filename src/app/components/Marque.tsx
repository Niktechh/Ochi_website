"use client"
import { motion } from 'motion/react'
import React from 'react'

const Marque = () => {
  return (
    <div data-scroll  data-scroll-section data-scroll-speed=".1" >
        <div className='w-full h-[30vw]  bg-[#004d43] rounded-t-2xl pt-30 mt-20 '>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden'>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration:5 }}  className='text-[20vw] leading-none  text-white mb-2   font-bold uppercase  '>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration:5 }}  className='text-[20vw] leading-none  text-white mb-2 font-bold uppercase  '>WE ARE OCHI</motion.h1>
            </div>

        </div>
    </div>
  )
}

export default Marque