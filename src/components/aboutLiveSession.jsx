import React from 'react';
import first from "../assets/aboutLiveSession/first.svg";
import second from "../assets/aboutLiveSession/second.svg";
import third from "../assets/aboutLiveSession/third.svg";
import forth from "../assets/aboutLiveSession/forth.svg";

const AboutLiveSession = () => {
  return (
    <div className="text-center py-8 mb-4 md:mb-16">
      <p className='text-3xl'>How <span className='text-blue-500'>Live Sessions</span> Work?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-4/5 md:w-3/5 mx-auto">
        <div className="flex flex-col items-center p-2 md:p-8 bg-white shadow-xl  w-[144px] h-[189px] md:h-[239px] md:w-[182px]">
          <img src={first} alt="Image 1" className="w-20 h-20 m-5" />
          <p className="font-Poppins text-[12px]  md:text-[16px] font-medium leading-[131.6%]">Express the interest by Filling the form</p>
        </div>

        <div className="flex flex-col items-center p-2 md:p-8 bg-white shadow-xl  w-[144px] h-[189px] md:h-[239px] md:w-[182px]">
          <img src={second} alt="Image 2" className="w-20 h-20 m-5" />
          <p className="font-Poppins text-[12px]  md:text-[16px] font-medium leading-[131.6%]">Finalize Speakers, Date and Time</p>
        </div>

        <div className="flex flex-col items-center p-2 md:p-8 bg-white shadow-xl  w-[144px] h-[189px] md:h-[239px] md:w-[182px]">
          <img src={third} alt="Image 3" className="w-20 h-20 m-5" />
          <p className="font-Poppins text-[12px]  md:text-[16px] font-medium leading-[131.6%]">Make payment through sent Payment Link</p>
        </div>

        <div className="flex flex-col items-center p-2 md:p-8 bg-white shadow-xl  w-[144px] h-[189px] md:h-[239px] md:w-[182px]">
          <img src={forth} alt="Image 4" className="w-20 h-20 m-5 " />
          <p className=" font-Poppins text-[12px]  md:text-[16px] font-medium leading-[131.6%] ">Host your Fully Managed Live Session</p>
        </div>
      </div>
    </div>
  );
};

export default AboutLiveSession;
