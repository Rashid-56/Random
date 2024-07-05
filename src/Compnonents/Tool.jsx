import React from 'react'
import Tools from "../assets/img/Tools.png"
import frame32 from "../assets/img/Frame 32.png"
import frame29 from "../assets/img/Frame 29.png"
const Tool = () => {
  return (
    <div>
      <div className='mx-36 my-24 flex justify-center items-center'>
       <div>
        
        <img src={Tools} alt="" />
        </div>
      </div>
        <div className='mt-5 flex mx-36 md:gap-x-20 md:flex-row flex-col gap-y-20 '>
            <div><img src={frame32} alt="" /></div>
            <div><img src={frame29} alt="" /></div>
        </div>
    </div>
  )
}

export default Tool
