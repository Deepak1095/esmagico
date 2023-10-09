import React from 'react';

const TrendingSpeakerCard = ({ name, role, about, image }) => {
  return (
    <div className="m-1 md:m-4 bg-customBlue text-white text-center rounded-xl h-40 md:h-52 pb-4">
      <img src={image} alt={name} className="w-full h-3/4 object-cover rounded-xl" />
      <h2 className='font-Poppins text-[10px]  md:text-[10.783px] font-semibold leading-[130.4%] mt-2'>
        {name}
      </h2>
      <p className='font-Poppins text-[6px]  md:text-[8.387px] font-normal leading-[133.4%] mt-1'>
        {role}
      </p>
      <p className='font-Poppins text-[6px]  md:text-[8.387px] font-normal leading-[133.4%] mt-1'>
        {about}
      </p>
    </div>
  );
};

export default TrendingSpeakerCard;
