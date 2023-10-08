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
                    <p className='text-3xl md:text-5xl'>Real People</p>
                    <p className='text-3xl md:text-5xl mb-4'>Real Learning</p>
                    <p className='text-lg md:text-xl'>SpeakIn is Asia's largest on-demand network providing access to top regional speakers</p>
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
