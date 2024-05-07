/* eslint-disable react/prop-types */

import "./proj_style.css";


const Project_prop = (props) => {
  return (
    <>
     
     
    
      <div className="card bg-sky-50 dark:bg-blue-950 rounded-lg shadow-lg aspect-w-16 aspect-h-9  ">
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
        <div className="div ml-10 ">
          <a
            class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="#"
          >
            <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
            <span
              class="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              Download
            </span>
          </a>
          </div>

      </div>


     
     
    </>
  );
};
export default Project_prop;
