import React from 'react';

const TrendingSpeakerCard = ({ name, role, about, image }) => {
  return (
    <div className="m-4 bg-customBlue text-white text-center rounded-xl h-62 pb-4">
      <img src={image} alt={name} className="w-full h-3/4 object-cover rounded-xl" />
      <h2 className='text-[8px] sm:text-[10px] md:text-[16px] mt-2'>
        {name}
      </h2>
      <p className='text-[5px] sm:text-[8px] md:text-[12px] mt-1'>
        {role}
      </p>
      <p className='text-[6px] sm:text-[8px] md:text-[12px] mt-1'>
        {about}
      </p>
    </div>
  );
};

export default TrendingSpeakerCard;
