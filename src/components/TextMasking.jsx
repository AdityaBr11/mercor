import React from 'react'
import mob from '../assets/phone.png'

const TextMasking = () => {
  return (
    <div className='w-[50%] h-[60%]  flex flex-col mx-auto text-white  font-black relative md:pt-0 mt-60 md:mt-48 lg:mt-20'>
        <div className=' flex justify-center md:text-[193px] text-[100px] relative bottom-14 z-0'>CASH</div>
        <div className="right-[25%] md:right-[5%] lg:right-[25%] -top-5  absolute">
          <img src={mob} alt="mob" />
        </div>
        <div className=' flex justify-center md:text-[193px] text-[100px] relative md:bottom-40 bottom-32 z-20'>APP</div>
    </div>
  )
}

export default TextMasking