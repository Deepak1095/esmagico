import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Learning = () => {
    const videoLinks = [
        'https://www.youtube.com/embed/HUlHUQcCIuo',
        'https://www.youtube.com/embed/VIDEO_ID_2',
        'https://www.youtube.com/embed/VIDEO_ID_3',
    ];

    return (
        <div className="bg-customBlue text-white flex flex-col md:flex-row pt-8 md:pt-20 md:pb-20 mb-12 md:mb-40">
            <div className="w-full md:w-1/2 p-4 md:pl-40 flex flex-col justify-center items-center">
                <div className='w-3/4'>
                    <p className="font-Poppins text-[26px]  md:text-[42px] font-semibold leading-[95%]">Real People</p>
                    <p className='font-Poppins text-[26px]  md:text-[42px] font-semibold leading-[95%]'>Real Learning</p>
                    <p className='font-Poppins text-[12px]  md:text-[18px] font-normal leading-[157%] mt-[20px] w-3/4 md:w-full'>SpeakIn is Asia's largest on-demand network providing access to top regional speakers</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 p-4 ">
                <Carousel
                    showThumbs={true}
                    showStatus={false}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    showArrows={true}
                    showIndicators={false}
                    emulateTouch={true}
                    swipeable={true}
                    autoPlay={true} 
                    interval={1500} 
                >
                    {videoLinks.map((videoUrl, index) => (
                        <iframe
                            key={index}
                            src={videoUrl}
                            allowFullScreen
                            className="w-full h-48 md:h-full"
                        ></iframe>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Learning;
