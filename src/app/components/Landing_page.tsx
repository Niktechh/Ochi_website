import { motion } from 'motion/react';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Landing_page = () => {
  return (
    
    <div data-scroll  data-scroll-section data-scroll-speed="-.3" className='  text-[#171717]'>
        <div className='title text-[5.5vw] font-bold pt-42 px-12 uppercase tracking-tighter leading-[5.5vw]'>
            <h1>We create</h1>
            <h1 className='flex'>
                <motion.div initial={{width:0}} animate={{width:"6.8vw"}} transition={{ ease:[0.76, 0, 0.24, 1]}} className='box w-[6.8vw] h-[4vw] bg-red-600 relative top-3'></motion.div>
                eye-opening
            </h1>
            <h1>presentations</h1>
        </div>
        <div className='landing_sum border-t-1 mt-42  border-[#c5c5c5] flex justify-between px-12 py-4'>
        <div className='para flex gap-113'>
        <p>Presentation and storytelling agency</p>
        <p>For innovation teams and global brands</p>
        </div>
        <div className='button flex   '>
            <p className='border-[#383838] border-1  rounded-full px-2 py-1'>START THE PROJECT</p>
            <FaArrowRight className='h-7 w-7 border-[#4e4d4d] border-1  rounded-full mt-1 p-1 font-extralight'  style={{ transform: 'rotate(315deg)' }}/>
            
        </div>
            
        
        </div>
        
    </div>
  )
}

export default Landing_page