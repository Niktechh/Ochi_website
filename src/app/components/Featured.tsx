import { motion, useAnimation } from 'motion/react'
import React, { use, useState } from 'react'

    const Featured = () => {
       const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]
       const handlehover = (index:number)=>{
        controls[index].start({
            y:"0%"
        })
       } 
          const handlehoverend = (index:number)=>{
        controls[index].start({
            y:"100%"
        })
       } 
            
            


    return (
        <div>
            <div className=' px-[4vw] heading w-full text-black text-6xl tracking-tight mt-[5vw] border-zinc-700 border-b-1 pb-[3vw]'>
                Featured projects
            </div>
            <div className='px-[2vw]'>
            
            <div className='cards flex flex-wrap gap-[1vw] '>
                
                <motion.div onHoverStart={()=>{
                    handlehover(0) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(0)
                    }}
                    className='cardconatiner h-[40vw] w-[47vw] relative gap-[2vw] mt-[1vw]'>
                    <div className='title absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]'>
                        <h2 className='text-[#cdea68] flex overflow-hidden  text-8xl uppercase whitespace-nowrap'>
                            {"SALIENCE LABS".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[0]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                            </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]'>
                        <img src={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"} className=' w-full h-full object-cover'/>
                    </div>
                </motion.div>
                
                <motion.div
                onHoverStart={()=>{
                    handlehover(1) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(1)
                    }}
                className='cardconatiner relative h-[40vw] w-[47vw] flex gap-[2vw] mt-[1vw]'>
                    <div className='title absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[50]'>
                        <h2 className='text-[#cdea68] flex overflow-hidden   text-8xl  uppercase  whitespace-nowrap'> 
                                {"MEDALLIA EXPERIENCE".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[1]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                            </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]  '>
                        <img src={"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"} className='w-full h-full object-cover'/>
                    </div>
                </motion.div>
                <motion.div
                onHoverStart={()=>{
                    handlehover(2) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(2)
                    }}
                className='cardconatiner relative h-[40vw] w-[47vw] flex gap-[2vw] mt-[1vw]'>
                    <div className='title absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]'>
                        <h2 className='text-[#cdea68] z-[99] flex overflow-hidden  text-8xl  uppercase whitespace-nowrap'>
                            {"AH2 & MATT HORN".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[2]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                            </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]'>
                        <img src={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"} className='w-full h-full object-cover'/>
                    </div>
                </motion.div>
                    <motion.div
                    onHoverStart={()=>{
                    handlehover(3) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(3)
                    }}
                    className='cardconatiner relative h-[40vw] w-[47vw] flex gap-[2vw] mt-[1vw]'>
                    <div className='title absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[50]'>
                        <h2 className='text-[#cdea68] z-[99] flex overflow-hidden text-8xl  uppercase whitespace-nowrap'>
                            {"VISE".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[3]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                        </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]'>
                        <img src={"https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"} className='w-full h-full object-cover'/>
                    </div>
                </motion.div>
                <motion.div 
                onHoverStart={()=>{
                    handlehover(4) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(4)
                    }}
                className='cardconatiner relative h-[40vw] w-[47vw] flex gap-[2vw] mt-[1vw]'>
                    <div className='title absolute left-full top-1/2 -translate-x-1/2  -translate-y-1/2 z-[50]'>
                        <h2 className='text-[#cdea68] z-[99] flex overflow-hidden text-8xl  uppercase whitespace-nowrap'>
                            {"SOFTSTART".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[4]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                        </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]'>
                        <img src={"https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"} className='w-full h-full object-cover'/>
                    </div>
                </motion.div>
                <motion.div 
                onHoverStart={()=>{
                    handlehover(5) 
                }}
                    onHoverEnd={()=>{
                        handlehoverend(5)
                    }}
                className='cardconatiner relative h-[40vw] w-[47vw] flex gap-[2vw] mt-[1vw]'>
                    <div className='title absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2  z-[50]'>
                        <h2 className='text-[#cdea68] z-[99] flex overflow-hidden text-8xl  uppercase whitespace-nowrap'>
                            {"FYDE".split("").map((item , index)=>{
                                return <motion.span
                                initial={{y:"100%"}}
                                animate={controls[5]}
                                transition={{
                                    delay: index * 0.05,
                                    ease:[0, 0.55, 0.45, 1]
                                }}
                                key={index} className='inline-block ' >{item}</motion.span>
                            })}
                        </h2>
                    </div>
                    <div className='card rounded-xl overflow-hidden z-[9]'>
                        <img src={"https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"} className='w-full h-full object-cover'/>
                    </div>
                </motion.div>
                </div>
            </div>
        </div>
    )
    }

    export default Featured