import React from 'react';
import bg from "../assets/aboutSession/bg.svg";
import front from "../assets/aboutSession/front.svg";

const AboutSession = () => {
  return (
    <div className=' mb-12 md:mb-52'>
      <p className=' text-[20px] md:text-[40px] font-semibold m-auto w-full text-center md:w-1/3 mt-96 '>Why Curate Your Own Sessions?</p>
      <div className='flex flex-col md:flex-row w-full md:w-3/4 m-auto mt-5 justify-between'>
      <div style={{ position: 'relative' }} className='m-auto w-3/4 md:w-full'>
        <img src={front} alt="" style={{ position: 'relative', zIndex: 2, top: '40px',left:"40px", bottom: '30px' }} />
        <img src={bg} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      </div>
      <div className='w-5/6 md:w-full mt-20 md:mt-1'>
          <div className='flex justify-center items-center mb-4'>
            <div className=" w-3 md:w-6 h-3 md:h-6 bg-blue-500 transform rotate-45"></div>
            <p className='text-[16px] md:text-[20px] w-3/4 md:w-1/2 ml-10'>Standard sessions do not <span className='text-blue-500'>personalize</span> the learning for your audience</p>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <div className=" w-3 md:w-6 h-3 md:h-6 bg-blue-500 transform rotate-45"></div>
            <p className='text-[16px] md:text-[20px] w-3/4 md:w-1/2 ml-10'><span className='text-blue-500'>Pick & Choose the</span> speakers who meet all your check boxes</p>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <div className=" w-3 md:w-6 h-3 md:h-6 bg-blue-500 transform rotate-45"></div>
            <p className='text-[16px] md:text-[20px] w-3/4 md:w-1/2 ml-10'><span className='text-blue-500'>Plug & Play</span> with flawless technology backbone</p>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <div className=" w-3 md:w-6 h-3 md:h-6 bg-blue-500 transform rotate-45"></div>
            <p className='text-[16px] md:text-[20px] w-3/4 md:w-1/2 ml-10'><span className='text-blue-500'>Flexible schedule</span> to meet your plans</p>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <div className=" w-3 md:w-6 h-3 md:h-6 bg-blue-500 transform rotate-45"></div>
            <p className='text-[16px] md:text-[20px] w-3/4 md:w-1/2 ml-10'><span className='text-blue-500'>Exclusive expert sessions</span> on the topic of your choice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSession;
