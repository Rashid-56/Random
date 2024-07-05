import React from 'react'
import feedback from "../assets/img/Feedback.png"
import frame31 from "../assets/img/Frame 31.png"

const Feedback = () => {
  return (
    <div>
      <div className='mx-36 my-24 flex justify-center items-center'>
        <img src={feedback} alt="" />
      </div>
      <div className='mt-5 flex mx-36 md:gap-x-20 md:flex-row flex-col gap-y-20 '>
            <div><img src={frame31} alt="" /></div>
            <div><img src={frame31} alt="" /></div>
        </div>
    </div>
  )
}

export default Feedback
