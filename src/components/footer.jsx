import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black width-full flex flex-col-reverse md:flex md:flex-row justify-around  md:gap-4 pt-6 pb-6'>
            <div className='w-full md:w-1/3 flex flex-col '>
                <div className=' '>
                    <p className='text-white p-4 md:p-2 text-[18px] md:text-[24px] ' ><span className='text-[22px] md:text-[30px]'>speak<span className='text-[#538DD7] font-Poppins '>in</span></span> is India's largest network of experts delivering business learning content</p>
                </div>
                <div>
                    <p className='text-[#A0A0A0] p-4 md:p-2'>©2020 SPEAKIN ALL RIGHT RESERVED</p>
                </div>


            </div>
            <div className='p-6  flex flex-col-reverse md:flex md:flex-col '>
                <div className='flex'>
                    <input className='w-96 p-2 pl-4 bg-black text-white text-[14px] border-2 border-white rounded ' type="text" placeholder='Enter your mail ID' />
                    <button className='bg-[#538DD7] text-white :text-[16px] ml-2 pl-3 pr-3 border rounded '>Subscribe</button>
                </div>

                <div>
                    <p className='text-[#A0A0A0] flex justify-start md:justify-end mt-4 mb-2'>subscribe to our news letter</p>
                </div>
            </div>
        </div>
    )
}

export default Footer