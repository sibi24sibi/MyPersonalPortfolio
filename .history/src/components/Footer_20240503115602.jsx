import React from 'react';
import thanks from '../assets/lottie/Thank_you.json'; 
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <footer className='w-screen h-20 bg-neutral-700'>
      <div className="flex justify-between ">
        <div className="div">
        <Lottie
            animationData={thanks}
            loop={true}
            className="max-w-[500px]"
        />
        </div>
        <div className="div">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
