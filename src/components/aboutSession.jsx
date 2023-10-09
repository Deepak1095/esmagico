import React from 'react';
import bg from "../assets/aboutSession/bg.svg";
import front from "../assets/aboutSession/front.svg";

const AboutSession = () => {
    return (
        <div className='mb-8 md:mb-44 md:mt-24 mt-96 w-3/5 md:m-auto ml-[40px]'>
            <p className="font-Poppins text-[16px]  md:text-[46px] font-bold leading-[148%] w-4/5 md:w-3/5 md:ml-[60px] ">Why Curate Your Own Sessions?</p>
            <div className='flex flex-col md:flex-row w-full m-auto mt-5 justify-evenly '>
                <div style={{ position: 'relative' }} className='w-3/4 md:w-full'>
                    <img src={front} alt="" style={{ position: 'relative', zIndex: 2, top: '40px', left: "40px", bottom: '30px' }} />
                    <img src={bg} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                </div>
                <div className='w-full mt-24 md:mt-1 '>
                    <div className='flex justify-center items-center mb-4'>
                        <div className=" w-3 md:w-6 h-3 md:h-6 bg-[#538DD7] transform rotate-45"></div>
                        <p className=' font-Poppins text-[16px] md:text-[20px] w-3/4 ml-10'>Standard sessions do not <span className='text-[#538DD7]'>personalize</span> the learning for your audience</p>
                    </div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className=" w-3 md:w-6 h-3 md:h-6 bg-[#538DD7] transform rotate-45"></div>
                        <p className=' font-Poppins text-[16px] md:text-[20px] w-3/4 ml-10'><span className='text-[#538DD7]'>Pick & Choose the</span> speakers who meet all your check boxes</p>
                    </div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className=" w-3 md:w-6 h-3 md:h-6 bg-[#538DD7] transform rotate-45"></div>
                        <p className=' font-Poppins text-[16px] md:text-[20px] w-3/4 ml-10'><span className='text-[#538DD7]'>Plug & Play</span> with flawless technology backbone</p>
                    </div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className=" w-3 md:w-6 h-3 md:h-6 bg-[#538DD7] transform rotate-45"></div>
                        <p className=' font-Poppins text-[16px] md:text-[20px] w-3/4 ml-10'><span className='text-[#538DD7]'>Flexible schedule</span> to meet your plans</p>
                    </div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className=" w-3 md:w-6 h-3 md:h-6 bg-[#538DD7] transform rotate-45"></div>
                        <p className=' font-Poppins text-[12px] md:text-[18px] w-3/4 ml-10'><span className='text-[#538DD7]'>Exclusive expert sessions</span> on the topic of your choice</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSession;
