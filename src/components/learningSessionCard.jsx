import React from 'react';

const LearningSessionCard = ({ image, role }) => {
  return (
    <div className="m-1 md:m-4 bg-white text-black rounded-xl font-Poppins text-[10px] font-medium md:text-[15px] leading-[131.6%] shadow-md w-[130px] h-[135px] md:h-[240px] md:w-[205px] border-4">
      <img src={image} className="w-full h-4/6 object-cover rounded-xl" alt="Card Image" />
      <p className=' pr-[4px]  pl-[4px] pb-[10px] pt-[10px] md:pr-[17px] md:pl-[16px] md:pt-[15px] md:pb-[21px]'>
       {role}
      </p>
    </div>
  );
};

export default LearningSessionCard;
