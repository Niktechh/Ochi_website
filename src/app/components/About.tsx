import React from 'react'

const About = () => {
  return (

    <div>
        <div data-scroll  data-scroll-section data-scroll-speed="0" className='w-full  bg-[#cdea68] rounded-t-2xl text-black pb-[3vw]'>
        <div className='text1 px-[3vw] pt-[7vw] pb-[4vw]'>
            <h2 className=' text-5xl w-[70vw]'>We craft category-defining presentations, brand identities, and digital experiences that <u>drive funding</u>, sales, and <u>market leadership</u>.</h2>
        </div>
        <div className='text2 border-t-1 border-b-1 border-[#676767] p-4 flex justify-between items-center px-[4.5vw]'>
            <div className='part1 flex gap-[40vw] item-center'>
            <div>
                <p>What you can expect:</p>
                
            </div>
            <div className='w-[18vw]'>
                
                <p>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</p>
                <br/>

                <p>Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.</p>
                <br/>
                <p>Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo. </p>
            </div>
            </div>
            <div className='part2 flex flex-col'>
                <a href='#'>Instagram</a>
                <a href='#'>Behance</a>
                <a href='#'>Fcaebook</a>
                <a href='#'>Linkedin</a>
            </div>
        </div>
         <div className='text3 flex justify-between pt-[2vw]  px-[4vw] '>
            <div className='left '>
                <h1 className='text-6xl'>How we can help:</h1>
                <div className='bg-[#212121] text-white rounded-full  py-[1vw] px-[2vw] w-[11vw] flex justify-between'>Read more
                    <div className='w-2 h-2 rounded-full relative top-2 bg-zinc-100 '></div>
                </div>
            </div>
            <div className='right w-[47vw] '>
                <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"/>
            </div>
        </div>
        </div>
       

    </div>
    
  )
}

export default About