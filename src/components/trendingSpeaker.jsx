import React from 'react'
import TrendingSpeakerCard from './trendingSpeakerCard'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { trendingSpeaker } from './data.ts';
const TrendingSpeaker = () => {
  return (
    <div className='mb-10 '>
      <div className="flex flex-col items-center justify-center md:mb-16">
        <h1 className="text-lg sm:text-1xl md:text-2xl lg:text-4xl font-semibold">Trending Speakers</h1>
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
          {trendingSpeaker.map((speaker, index) => (
            <div key={index}>
              <TrendingSpeakerCard
                name={speaker.name}
                role={speaker.role}
                about={speaker.about}
                image={speaker.image}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden md:flex md:flex-wrap md:justify-center mb-40">
        {trendingSpeaker.map((speaker, index) => (
          <TrendingSpeakerCard
            key={index}
            name={speaker.name}
            role={speaker.role}
            about={speaker.about}
            image={speaker.image}
          />
        ))}
      </div>
    </div>
  )
}

export default TrendingSpeaker