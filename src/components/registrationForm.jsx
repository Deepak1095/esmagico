import React from 'react'

const RegistrationForm = () => {
    return (
        <div className='w-full md:p-10 shadow-2xl bg-white'>
            <div className=" border-4 border-dashed rounded-sm p-10">

                <div className='text-center  items-center mb-2'>
                    <p className='text-2xl md:text-4xl'>speak<span className='text-customBlue text-2xl md:text-4xl'>In</span></p>
                    <p className="text-xl md:text-5xl font-bold md:mb-4">Welcome Form</p>
                    <p className='text-sm md:text-2xl'>Submit Your Requirement</p>
                </div>


                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Name:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Mobile Number:</label>
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
                            />
                        </div>
                    </div>



                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Organization:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="organization"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Date:</label>
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            type="date"
                            name="date"
                        />
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl  w-full"
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

