/* eslint-disable react/prop-types */

import "./proj_style.css";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer"; // Import useInView



const Project_prop = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView(); // Use useInView hook

  // Check if the element is in view
  React.useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className={`card bg-blue-100 dark:bg-sky-950 rounded-lg shadow-lg ${
          isAnimated ? "animated" : ""
        }`}
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
