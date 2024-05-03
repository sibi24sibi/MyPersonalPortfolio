import React from 'react';
import thanks from '../assets/lottie/Thank_you.json'; 
import Lottie from "lottie-react";
import {
  SiGithub,
  SiLinkedin,
  SiGmail
} from "react-icons/si";


const Footer = () => {
  return (
    <footer className='w-screen h-fit dark:bg-neutral-800 bg-slate-300 dark: p-5'>
      <div className="flex justify-between ">
        <div className="div  ">
        <Lottie
            animationData={thanks}
            loop={true}
            className=" w-[150px]"
        />
        </div>
        <div className="div flex row-reverse items-center gap-7  text-slate-200">
        <h3 className='p-12 bg-blue-800 rounded-full text-3xl'> <SiGithub /></h3>
        <h3 className='p-12 bg-blue-800 rounded-full text-3xl'> <SiGmail /></h3>
        <h3 className='p-12 bg-blue-800 rounded-full text-3xl'> <SiLinkedin /></h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
