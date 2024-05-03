/* eslint-disable react/prop-types */

import "./proj_style.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Project_prop = (props) => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once
  }, []);

  return (
    <>
      <div className="card bg-blue-100 dark:bg-sky-950 rounded-lg shadow-lg"
           data-aos="fade-up" // Set AOS animation here
           data-aos-duration="1000" // Adjust animation duration as per your preference
      >
        <h3 
        className="title capitalize font-bold h-20 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center"
        >
          {props.title}
        </h3>
            <div className="bar h-1 w-40 dark:bg-gray-800  bg-slate-600  mx-auto"></div>
        <div className="flex gap-1 ml-3 mt-3 ">
                {props.react}
                {props.vite}
                {props.html5}
                {props.css3}
                {props.php}
                {props.mysql}
                {props.javascript}
                {props.tailwindcss}
                {props.laravel} 
                {props.bootstrap}
                {props.wordpress}

        </div>
        <p className="dark:text-slate-500 mt-2 text-sm px-5">
          {props.para}
        </p>
      </div>


     
     
    </>
  );
};
export default Project_prop;
