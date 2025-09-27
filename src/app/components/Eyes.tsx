"use client"
import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0)
  const [xCor, setXCor] = useState(0)
  const [yCor, setYCor] = useState(0)


  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let x = e.clientX;
      let y = e.clientY;
      setXCor(((x / window.innerWidth) - 0.5) * 40)
      setYCor(((y / window.innerWidth) - 0.5) * 40)

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;  
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle -180)
    })
  })

    



  return (
    <div>
        <div className='w-full h-screen overflow-hidden mt-[] '>
            <div data-scroll  data-scroll-section data-scroll-speed="-.7" className=' relative bg-cover bg-center  w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className=' absolute    top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-[2vw] '>
                <div className='h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                <div style={{ transform: `translate(${xCor}px, ${yCor}px)` }} className=' text-white flex justify-center items-center h-2/3 w-2/3 rounded-full bg-[#171717] relative  '>
                Play
                <div style={{transform: ` rotate(${rotate}deg)`}} className='line w-full h-10  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                    <div className='h-10 w-10 rounded-full bg-zinc-100 '></div>
                </div>
                </div>  
                </div>
                <div className='h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                   <div style={{ transform: `translate(${xCor}px, ${yCor}px)` }} className=' text-white flex justify-center items-center h-2/3 w-2/3 rounded-full bg-[#171717] relative  '>
                   Play
                 <div style={{transform: ` rotate(${rotate}deg)`}} className='line w-full h-10  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                    <div className='h-10 w-10 rounded-full bg-zinc-100 '></div>
                </div></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes