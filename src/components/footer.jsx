import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black width-full lg:flex justify-around sm:grid grid-cols-2 gap-4 pt-6 pb-6'>
            <div className='lg:w-1/3 sm:w-1 flex flex-col'>
                <div className='mb-6'>
                    <p className='text-white text-[24px] ' ><span className='text-[30px]'>speak<span className='text-blue-500'>in</span></span> is India's largest network of experts delivering business learning content</p>
                </div>
                <div>
                    <p className='text-white pl-10'>©2020 SPEAKIN ALL RIGHT RESERVED</p>
                </div>


            </div>
            <div className='p-6'>
                <div className='flex'>
                    <input className='w-96 p-2 pl-4 bg-black text-white text-[14px] border-2 border-white rounded ' type="text" placeholder='Enter your mail ID' />
                    <button className='bg-blue-500 text-white text-[16px] ml-2 pl-3 pr-3 border rounded '>Subscribe</button>
                </div>

                <div>
                    <p className='text-white flex justify-end mt-4'>subscribe to our news letter</p>
                </div>
            </div>
        </div>
    )
}

export default Footer