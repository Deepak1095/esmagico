import React from 'react';
import yellowBg from "../assets/about/yellowBg.svg";
import fadeblue from "../assets/about/fadeblue.svg";

const About = () => {
    return (
        <div className='relative mb-20 md:mb-28 mt-12 h-[300px] md:h-[550px]'>
            <img src={fadeblue} alt="" className="absolute inset-0 z-10 w-full h-full object-cover" />
            <img src={yellowBg} alt="" className="absolute inset-0 z-20 border w-full left-0 h-full object-cover" />
            <img
                src="https://github.com/Deepak1095/esmagico/assets/111503473/617d52aa-2d69-4c2e-9b84-9db7068d85f8"
                alt=""
                style={{
                    position: 'relative',
                    zIndex: 30,
                    maxWidth: '100%',
                    top: '10%',
                    mixBlendMode: 'multiply',
                }}
                className='w-1/2 md:w-1/3 '
            />

            <img
                src={"https://github.com/Deepak1095/esmagico/assets/111503473/ba06111a-e36d-4318-937d-0da8e65fdf7b"}
                alt=""
                style={{
                    position: 'absolute',
                    zIndex: 40,
                    left: '15%',
                    top: window.innerWidth < 768 ? '30%' : '40%',
                    transform: 'translate(-50%, -50%)',
                }}
                className='w-1/3 md:w-1/6'
            />
            <div
                className="absolute top-0 right-2 md:right-[10%] p-2 md:p-4 text-black z-40 w-3/5 md:w-2/5"
                style={{ transform: 'translate(0, 10%)', top:  window.innerWidth < 768 ?'5%':'15%' }}
            >
                <p className='font-Poppins text-[16px]  md:text-[32px] font-semibold leading-[157%] md:pb-[15px]'>About SpeakIn</p>
                <p className='font-Poppins text-[12px]  md:text-[18px] font-normal leading-[157%]'>
                    SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire, and motivate.
                </p>
            </div>

        </div>
    );
};

export default About;