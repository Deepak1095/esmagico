import React, { useState, useEffect } from 'react';
import hallImage from "../assets/head/hall.jpg";
import zoom from "../assets/head/zoom.jpg";
import firstImage from "../assets/head/1.svg";
import secondImage from "../assets/head/2.svg";
import thirdImage from "../assets/head/3.svg";

const Head = () => {

  return (
    <div className="relative">
      <img src={hallImage} className='w-full h-full' alt="" />

      <div className="absolute top-10 md:top-60 w-1/2 right-0 md:right-1/3 md:left-1/2 md:w-1/2">
        <p className="text-[16px] md:text-[50px] text-white p-2 font-semibold">Curate Your own Training Sessions with top Keynote Speakers</p>
        <div className='bg-black bg-opacity-50 p-4 w-11/12 md:w-4/5'>
          <div className='flex flex-row'>
            <p className='text-white text-[16px] md:text-[40px]'>speak<span className='text-customBlue text-[16px] md:text-[40px]'>In</span>+</p>
            <img src={zoom} alt="" className='w-6 h-6 md:w-1/5 md:h-auto rounded-sm md:rounded-lg md:ml-2 md:mt-2' />
          </div>
          <p className="text-[7px] md:text-[30px] text-white md:p-2 font-semibold"> = Your Own Live Session in &lt; 30 minutes</p>

          <button type="button" className='bg-[#ffde00]  p-1 md:pr-6 md:pl-6 md:p-2 text-[8px] md:text-[20px] font-semibold rounded-xl'>30 Minutes Schedule Now</button>
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
