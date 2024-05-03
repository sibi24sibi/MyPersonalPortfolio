import React from 'react';
import thanks from '../assets/lottie/Thank_you.json'; 
import Lottie from "lottie-react";
import {
  
} from "react-icons/si";


const Footer = () => {
  return (
    <footer className='w-screen h-fit bg-neutral-700'>
      <div className="flex justify-between ">
        <div className="div m-5 ">
        <Lottie
            animationData={thanks}
            loop={true}
            className=" w-[150px]"
        />
        </div>
        <div className="div">
        <SiGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
