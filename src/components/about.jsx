import React from 'react';
import yellowBg from "../assets/about/yellowBg.svg";
import fadeblue from "../assets/about/fadeblue.svg";

const About = () => {
  return (
    <div className='relative mb-12 md:mb-52 mt-12'>
    <img src={fadeblue} alt="" className="absolute inset-0 z-10 w-full" />
    <img src={yellowBg} alt="" className="absolute inset-0 z-20 w-full" />
    <img
      src="https://github.com/Deepak1095/esmagico/assets/111503473/617d52aa-2d69-4c2e-9b84-9db7068d85f8"
      alt=""
      style={{
        position: 'relative',
        zIndex: 30,
        maxWidth: '100%', 
        top: '10%',
      }}
      className='w-1/3 ' 
    />

      <img
        src={"https://github.com/Deepak1095/esmagico/assets/111503473/ba06111a-e36d-4318-937d-0da8e65fdf7b"}
        alt=""
        style={{
          position: 'absolute',
          zIndex: 40,
          left: '19%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className='w-1/4'
      />
     <div
  className="absolute top-0 right-2 md:right-[15%] p-2 md:p-4 text-black z-40 w-1/2 md:w-2/5"
  style={{ transform: 'translate(0, 10%)', top: '0' }}
>
  <p className='text-[10px] md:text-[40px] md:pb-2 font-semibold'>About SpeakIn</p>
  <p className='text-[7px] md:text-[20px]'>
    SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire, and motivate.
  </p>
</div>

    </div>
  );
};

export default About;
