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
    <footer className='w-screen h-fit bg-neutral-800 p-5'>
      <div className="flex justify-between ">
        <div className="div  ">
        <Lottie
            animationData={thanks}
            loop={true}
            className=" w-[150px]"
        />
        </div>
        <div className="div flex row-reverse items-center gap-2.5  dark:text-slate-200 text-black">
        <h3> <SiGithub /></h3>
        <h3> <SiGmail /></h3>
        <h3> <SiLinkedin /></h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
