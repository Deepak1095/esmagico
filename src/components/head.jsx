import React, { useState, useEffect } from 'react';
import hallImage from "../assets/head/hall.jpg";
import zoom from "../assets/head/zoom.jpg";
import firstImage from "../assets/head/1.svg";
import secondImage from "../assets/head/2.svg";
import thirdImage from "../assets/head/3.svg";
import logo from "../assets/logo.svg"

const Head = () => {

  return (
    <div className="relative">
      <img src={hallImage} className='w-full h-full' alt="" />
      <div className="absolute top-[19px] left-[130px]">
      <img src={logo} alt="" className=' w-[48px] h-[14px] md:h-[28px] md:w-[99px] rounded-sm md:rounded-lg md:ml-2 md:mt-2 hidden md:block' />
      </div>
      <div className="absolute top-40 md:top-[138px]  left-[163] md:left-[800px]  w-[204px] h-[148px] md:h-[442px] md:w-[751px] ">

        <div className='w-[195px] h-[57px]  md:w-[700px] md:h-[183px] md:mb-4'>
          <p className="text-white font-Poppins text-[16px]  md:text-[46px] font-semibold leading-[131.6%] ">
            Curate Your own Training Sessions with top Keynote Speakers
          </p>
        </div>

        <div className='bg-black bg-opacity-50 p-[6.23px] md:p-[20px] w-[177px] h-[69px]  md:w-[571px] md:h-[224px]'>
          <div className='flex flex-row items-center '>
            <img src={logo} alt="" className=' w-[48px] h-[14px] md:h-[45px] md:w-[157px] rounded-sm md:rounded-lg md:ml-2 md:mt-2' />
           <p className="text-white font-Poppins text-[16px]  md:text-[46px] font-semibold leading-[131.6%] md:pr-2">+</p>

            <div className='bg-white p-[2.49px] md:w-[79px] md:h-[37.281px] h-[11.616px] w-[24.615px] rounded-xl flex justify-center'>
            <img src={zoom} alt="" className=' w-[19px] h-[8.85px] md:h-[28.85px] md:w-[61px] rounded-sm md:rounded-lg' />
            </div>
            
          </div>

          <p className="text-[8px] md:text-[22px] text-white md:p-2 font-semibold"> = Your Own Live Session in &lt; 30 minutes</p>
          <button type="button" className='bg-[#ffde00] pl-[6.54px] pr-[6.23px] pt-[3.05px] pb-[3.74px] md:pl-[21px] md:pr-[20px] md:pt-[13px] md:pb-[12px] md:ml-4 rounded-xl md:mt-[14px]'>
            <p className=' font-Poppins  text-[6px] md:text-[18px] font-bold '>30 Minutes Schedule Now</p>
            </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full ">
        <div className="relative pb-16 md:pb-80" >
          <img src={secondImage} alt="Second" className="absolute md:top-0 left-0 w-full " />
          <img src={firstImage} alt="First" className="absolute md:top-16 left-0 w-full " />
          <img src={thirdImage} alt="Third" className="absolute md:top-4 left-0 w-full " />
        </div>

      </div>
    </div>
  );
};

export default Head;
