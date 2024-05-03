/* eslint-disable react/prop-types */

import "./proj_style.css";


const Project_prop = (props) => {
  return (
    <>
     
     
    
      <div className="card bg-slate-300 dark:bg-zinc-900 rounded-lg shadow-lg  ">
        <h3 
        className="title capitalize font-bold h-20 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center"
        >
          {props.title}
        </h3>
            <div className="bar h-1 w-40 dark:bg-gray-800  bg-slate-600  mx-auto"></div>
        <div className="flex gap-1 ml-3 mt-3 ">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
        </div>
        <p className="dark:text-slate-500 mt-2 text-sm px-5">
          {props.para}
        </p>
      </div>


     
     
    </>
  );
};
export default Project_prop;
