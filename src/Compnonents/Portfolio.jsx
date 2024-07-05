import React from 'react'
import Port from "../assets/img/Portfolio.png"
import { Carousel } from "@material-tailwind/react";
import frame from "../assets/img/Frame 3370.png"

import pandaimg from "../assets/img/1 (1).png"

const Portfolio = () => {
  return (
    <div>
        <div className=' bg-gradient-to-t bg-transparent from-green-900 to-green-700  h-1 mt-28'></div>
      <div className='mx-36 my-24 flex justify-center items-center'>
        <img className='items center' src={Port} alt="" />
      </div>
      <div className='max-w-[80%] mx-auto' >
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src={frame}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={frame}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      
    </Carousel>
      </div>
      <div className='my-11'><img src={pandaimg} alt="" /></div>

    </div>
  )
}

export default Portfolio
