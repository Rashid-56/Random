import React from 'react'
import pocess from '../assets/img/Our Process.png'
import frame30 from "../assets/img/Frame 30.png"
import frame337 from "../assets/img/Frame 3370 (1).png"
import frame3371 from "../assets/img/Frame 3371.png"
import frame3372 from "../assets/img/Frame 3372.png"
import frame3373 from "../assets/img/Frame 3373.png"
const Process = () => {
  return (
    <div>
      <div className='md:mx-36 mx-14 my-24 flex justify-center items-center'>
        <img src={pocess} alt="" />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 md:mx-36 mx-20 md:gap-x-20  md:gap-y-20 gap-y-10'>
            <div className='grid col-span-2 md:col-span-1' ><img src={frame30} alt="" /></div>
            <div className='grid col-span-2 md:col-span-1'><img src={frame337} alt="" /></div>
            <div className='grid col-span-2 md:col-span-1'><img src={frame3371} alt="" /></div>
            <div className='grid col-span-2 md:col-span-1'><img src={frame3372} alt="" /></div>
            <div className='grid col-span-2 '><img src={frame3373} alt="" /></div>
        </div>
        <div className='mx-36 font-epilogue text-[26px] items-center mt-14 text-white' >
            <h1 className='text-center'>This streamlined process maintains focus on key stages of the design journey while ensuring efficient progress towards a successful outcome.</h1>
        </div>
    </div>
  )
}

export default Process
