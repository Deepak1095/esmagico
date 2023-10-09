import React from 'react'
import logo2 from "../assets/logo2.svg"
import click from "../assets/click.svg"
const RegistrationForm = () => {
    return (
        <div className='w-full md:p-10 shadow-2xl bg-white ]  '>
            <div className=" border-4 md:border-dashed rounded-sm pl-[28px] pr-[28px] md:pl-[55px] md:pr-[55px] text-left">

                <div className='flex flex-col items-center justify-center mb-2 mt-[20px] md:mt-0'>
                    <img 
                        src={logo2}
                        alt=""
                        className='w-[115px] h-[37px] md:h-[45px] md:w-[140px] rounded-sm md:rounded-lg md:ml-2 md:mt-2'
                    />
                    <p className="font-Poppins text-[16px] md:text-[26px] font-medium leading-[148%]">
                        Welcome Form
                    </p>
                    <p className="text-[#A0A0A0] font-Poppins text-[12px] md:text-[14px] font-medium leading-[148%]">
                        Submit Your Requirement
                    </p>
                </div>



                <form>
                    <div className="mb-4">
                        <label className="block font-Poppins text-[12px] md:text-[14px] font-medium  mb-2">Name: <span className='text-[#FF5E5E]'>*</span>

                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="name"
                            placeholder='Enter name'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-Poppins text-[12px] md:text-[14px] font-medium  mb-2">Email:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="email"
                            name="email"
                            placeholder='Enter email'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-Poppins text-[12px] md:text-[14px] font-medium  mb-2">Mobile Number:</label>
                        <div className="flex">
                            <select
                                className="w-1/4 px-2 py-2 border rounded-l"
                                name="countryCode"
                            >
                                <option value="+91">+91</option>
                                <option value="+44">+44</option>
                            </select>
                            <input
                                className="w-3/4 px-3 py-2 border rounded-r"
                                type="tel"
                                name="mobile"
                                placeholder='+91'
                            />
                        </div>
                    </div>



                    <div className="mb-4">
                        <label className="block font-Poppins text-[12px] md:text-[14px] font-medium  mb-2">Organization:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="organization"
                            placeholder='Enter name'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block tfont-Poppins text-[12px] md:text-[14px] font-medium  mb-2">Date:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="date"
                            name="date"

                        />
                    </div>
                    <div className='text-start'>
                        <div>
                            <p className='font-Poppins text-[12px] md:text-[14px] font-medium  sm:mb-2'>Topics of the Sessions</p>
                        </div>
                        <div className="flex flex-wrap">
                        <p className="flex items-center text-[12px] md:text-[14px] font-medium border border-[#AEB7C3] rounded-xl w-[173px] h-[31px]  md:w-[193px] md:h-[31px] p-2 m-[5px] md:m:1">
                                <img src={click} alt="" className="mr-2" />
                                 Business Leadership
                            </p>
                            <p className="flex items-center text-[12px] md:text-[14px]  font-medium border border-[#AEB7C3] rounded-xl  w-[113px] h-[31px]  md:w-[123px] md:h-[31px] p-2 m-[5px] md:m-1">
                                <img src={click} alt="" className="mr-2" />
                                 Spirituality
                            </p>
                            <p className="flex items-center text-[12px] md:text-[14px] w-[183px] h-[31px]  md:w-[213px] md:h-[31px]  font-medium border border-[#AEB7C3] rounded-xl p-2 m-[5px] md:m-1">
                                <img src={click} alt="" className="mr-2" />
                                Motivation During Crisis
                            </p>
                           
                           

                           
                        </div>
                    </div>
                    <button
                        className="bg-[#538DD7] text-white text-[12px] font-bold  md:text-[14px] font-Poppins  py-2 px-4 rounded-3xl  w-full mt-[20px] mb-[20px]"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm

