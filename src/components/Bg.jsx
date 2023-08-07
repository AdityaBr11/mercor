import React from 'react'
import sm from '../assets/smallcube.png';
import big from '../assets/bigcube.png'
import stair from '../assets/stairs.png'
import pilar from '../assets/pillar.png'

const Bg = () => {
  return (
    <div className='bg-black min-h-screen relative overflow-hidden'>
       <div className="absolute rounded w-12 h-12 top-4 left-12 bg-[#00d54b]"> <img src="" alt="" /></div>
       <div className="absolute rounded w-12 h-12 top-4 right-12 bg-transparent -rotate-6  lg:bg-[#00d54b]"> <img src="" alt="" /></div>
       <div className="absolute top-20 left-60 "> <img src={sm} alt="sm" /></div>
       <div className="absolute md:top-20 top-40 right-60"> <img src={stair} alt="stair" /></div>
       <div className="absolute bottom-20 left-60 "> <img src={big} alt="big" /></div>
       <div className="absolute -bottom-4 right-60 "> <img src={pilar} alt="pillar" /></div>
     </div>
  )
}

export default Bg