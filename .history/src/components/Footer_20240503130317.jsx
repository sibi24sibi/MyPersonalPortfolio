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
    <footer className=' min-w-full h-fit dark:bg-neutral-800 bg-slate-300 px-10 p-5'>
      <div className="">
        <div className="div md:py-0 py-10 ">
        <Lottie
            animationData={thanks}
            loop={true}
            className=" w-[25px]"
        />
        <h1 className="text-4xl font-bold text-slate-200">Tap to chat with Me</h1>
        </div>
        <div className="div flex row-reverse items-center gap-7  text-slate-200">
        <h3 className='p-3 bg-slate-950 rounded-full text-lg'> <SiGithub /></h3>
        <h3 className='p-3 bg-red-600 rounded-full text-lg'> <SiGmail /></h3>
        <h3 className='p-3 bg-blue-800 rounded-full text-lg'> <SiLinkedin /></h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
