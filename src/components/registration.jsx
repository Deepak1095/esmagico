import React, { useState,useEffect } from 'react';
import RegistrationForm from './registrationForm';
import img from "../assets/handshakeImg.png";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000, 
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      borderRadius: '8px',
      outline: 'none',
      padding: '0',
      zIndex: 1001, 
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative mt-44 md:mt-96 md:pb-96 '>
      <div className='absolute inset-0 flex flex-col-reverse sm:flex-row items-center justify-center'>
        <div className="w-1/4 text-center ">
          <img src={img} alt="" className="absolute top-0 right-0 w-1/2 md:w-1/4" />
        </div>
        {window.innerWidth <= 720 ? (
          <div className="w-1/3 text-center absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2" style={{ left: '30%' }}>
            {isModalOpen ? null : (
              <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-20 rounded" onClick={openModal}>
                Register
              </button>
            )}
          </div>
        ) : (
            <div className="w-1/3 text-center absolute" style={{ top: 'calc(-15% - 10px)', left: '30%', transform: 'translate(-50%, -50%)' }}>
  {isModalOpen ? null : (
    <RegistrationForm />
  )}
</div>

          
        )}
      </div>
      {isModalOpen ? null : (
   
   <div className="absolute bottom-0 md:bottom-40 right-0">
  <p className='text-[20px] md:text-[44px] text-semibold w-1/2 z-10 relative' style={{ left: window.innerWidth <= 720 ? '10%' : '20%', transform: 'translateY(-50%)' }}>
    Grow with India's Largest Network of Experts
  </p>
</div>


  
   
     
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Form Modal"
        style={modalStyles}
      >
        <div className="text-right">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-black text-2xl cursor-pointer absolute top-2 right-2"
            onClick={closeModal}
          />
        </div>
        <div className='w-full m-2 p-2 md:p-10 shadow-2xl bg-white '>
          <div className=" rounded-sm md:p-10">
            <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
            <RegistrationForm />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Registration;
