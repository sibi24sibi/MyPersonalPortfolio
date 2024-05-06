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
    
<footer className="bg-white dark:bg-zinc-900 min-w-full">
  <div className="mx-auto  px-4 pb-8  sm:px-6 lg:px-8 ">
    
    <div
      className=" border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between  "
    >
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
        </li>

        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
        </li>

        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
        </li>
      </ul>

      
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-slate-300 transition hover:opacity-75"
          >
            <SiLinkedin className=" dark:text-slate-200 text-black" />
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-slate-300 transition hover:opacity-75"
          >
            <SiGithub className=" dark:text-slate-200 text-black" />
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 dark:text-slate-300 transition hover:opacity-75"
          >
            <SiGmail className=" dark:text-slate-200 text-black" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
  );
};

export default Footer;
