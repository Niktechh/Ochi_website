import React from 'react'

const Cards = () => {
  return (
    <div id='card-section' className="w-full h-[120vh] flex gap-[1vw] py-[20vh] px-[3vw]">

  
    
    <div  data-scroll-section  className='w-full h-[120vh] flex gap-[1vw] py-[20vh] px-[3vw] '>
        <div 
         
        data-scroll
        data-scroll-sticky
        data-scroll-target="#cards-section"
        id="cards-container"
        
        className='Card_cont1 h-[50vh] w-1/2  '>
            <div className='relative card1 w-full h-full bg-[#004d43] rounded-2xl flex justify-center items-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' className='w-32'/>
                <button className=' absolute bottom-[3vh] left-[2vh]  border-[#cdea68] border-2 px-[1vh] rounded-full text-[#cdea68]'>&copy;2019-2025</button>
            </div>
        </div>
         <div className=' relative Card_cont2 h-[50vh] w-1/2 flex gap-[1vw]'>
            <div className='card2 w-1/2 h-full bg-[#212121] rounded-2xl flex justify-center items-center '>
             <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' className='w-32'/>
                <button className=' absolute bottom-[3vh] left-[2vh]  border-[#f1f1f1] border-2 px-[1vh] rounded-full text-[#f1f1f1] uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className=' relative card3 w-1/2 h-full bg-[#212121] rounded-2xl flex justify-center items-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' className='w-32'/>
                <button className=' absolute bottom-[3vh] left-[2vh]  border-[#f1f1f1] border-2 px-[1vh] rounded-full text-[#f1f1f1] uppercase'>business bootcamp alumni</button>
            </div>
        </div>
    </div>
      </div>
   
  )
}

export default Cards