import React from 'react';
import Thanks from '../assets/lottie/Thank_you.json';

const Footer = () => {
  return (
    <footer className='w-screen h-20 bg-neutral-700'>
      <div className="flex justify-between ">
        <div className="div">
        <Lottie
            animationData={Thanks}
            loop={true}
            className="max-w-[50px]"
        />
        </div>
        <div className="div">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
