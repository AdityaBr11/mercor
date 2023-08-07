import React from "react";
import tw from '../assets/twitter.png'
import insta from '../assets/insta.png'
import msg from '../assets/msg.png'
import apple from '../assets/apple.png'
import play from '../assets/play.png'

const Footer = () => {
  return (
    <div className="md:h-36 h-60 w-full space-y-8 md:space-y-4 lg:space-y-0  md:flex-col lg:flex-row flex-col flex justify-between items-center text-white">
      <div className="md:w-[100%] lg:w-[50%] w-[100%] h-full  flex items-center md:justify-center lg:justify-start  gap-5 px-5 md:px-20">
        <div className="px-8 py-2 border flex items-center justify-between gap-4 border-white rounded uppercase font-semibold"><img src={apple} alt="" /> <span>AppStore</span></div>
        <div className="px-8 py-2 border flex items-center gap-4 border-white rounded uppercase font-semibold"><img src={play} alt="" /> PlayStore</div>
      </div>
      <div className="md:w-[100%] lg:w-[50%] w-[100%] h-full  md:flex-col lg:flex-row flex-col flex justify-center items-center gap-6">
        <p className="text-xs font-light md:w-[60%] w-[100%] px-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          corrupti? Eveniet praesentium mollitia consectetur expedita, nisi
          cumque inventore laborum adipisci magnam esse. Quis distinctio nulla
          delectus voluptas similique. Mollitia, nesciunt!
        </p>
        <div className="flex gap-6 ">
          <div className=""><img src={msg} alt="msg" /></div>
          <div className=""><img src={tw} alt="tw" /></div>
          <div className=""><img src={insta} alt="insta" /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
