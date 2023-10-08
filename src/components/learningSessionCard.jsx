import React from 'react';

const LearningSessionCard = ({ image, role }) => {
  return (
    <div className="m-4 bg-white text-black rounded-xl w-28 sm:w-52 h-40 md:h-48 pb-3 md:pb-7 shadow-md">
      <img src={image} className="w-full h-3/4 object-cover rounded-xl" alt="Card Image" />
      <p className='text-[10px] md:text-[16px] p-1 sm:p-2 md:p-3'>
        {role}
      </p>
    </div>
  );
};

export default LearningSessionCard;
