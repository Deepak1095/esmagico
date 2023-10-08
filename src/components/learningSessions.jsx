import React from 'react'
import { learningSessionData } from './data.ts'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LearningSessionCard from './learningSessionCard.jsx';

const LearningSession = () => {
    return (
        <div className='md:bg-blue-100 pt-10 md:mb-20 md:mt-48'>
            <div className='w-full sm:w-5/6 md:w-4/5 m-auto  pt-2 pb-10 '>

                <div className="flex flex-col justify-center mb-2 md:mb-4  ml-4 text-[20px] ">
                    <span className='inline-block'>
                        <p className='text-white bg-red-400 pr-4 pl-4 p-2 rounded-md inline-block mb-2'>
                            Trending
                        </p>
                    </span>


                    <p className="text-lg sm:text-1xl md:text-2xl lg:text-4xl font-semibold ">Live Learning Sessions</p>
                </div>

                <div className="sm:block md:hidden">

                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        dynamicHeight={false}
                        showArrows={true}
                        showIndicators={false}
                        emulateTouch={true}
                        swipeable={true}
                        centerMode={true}
                        centerSlidePercentage={33.33}
                    >
                        {learningSessionData.map((speaker, index) => (
                            <div key={index}>
                                <LearningSessionCard
                                    image={speaker.image}
                                    role={speaker.about}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="hidden md:flex md:flex-wrap md:justify-center mb-10">
                    {learningSessionData.map((speaker, index) => (
                        <div key={index}>
                            <LearningSessionCard
                                image={speaker.image}
                                role={speaker.about}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default LearningSession