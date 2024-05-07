/* eslint-disable react/prop-types */

import { Github } from "../constants/Constant";
import "./proj_style.css";


const Project_prop = (props) => {
  return (
    <>
     
     
    
      <div className="card bg-sky-50 dark:bg-blue-950 rounded-lg shadow-lg w-fit  ">
        <h3 
        className="title capitalize font-bold h-20 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center"
        >
          {props.title}
        </h3>
            <div className="bar h-1 min-w-40 dark:bg-gray-400  bg-slate-600  mx-5"></div>
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
        <p className="dark:text-slate-500 mt-2 text-sm px-5  select-none">
          {props.para}
        </p>

        
          <a
            class="inline-flex items-center gap-2 mt-8 rounded border absolute bottom-0 mb-10 inset-x-1/4 border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            href={props.github_link}
          >
            <p class="text-sm font-medium">View</p>

           
          </a>

        
      </div>


     
     
    </>
  );
};
export default Project_prop;
