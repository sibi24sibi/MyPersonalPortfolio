/* eslint-disable react/prop-types */

const Project_prop = (props) => {
  return (
    <>
      <div className="card bg-sky-50 dark:bg-blue-950 rounded-lg shadow-lg   ">
        <h3 className="title capitalize font-bold h-20 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center">
          {props.title}
        </h3>
        <div className="bar h-1 dark:bg-gray-400  bg-slate-600  mx-5"></div>
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
        <p className="dark:text-slate-500  text-slate-900 mt-2 text-sm px-5   select-none">
          {props.para}
        </p>

        <div className="flex absolute bottom-8 left-8">
          <a className=" " href={props.github_link}>
            <button className=" items-center text-sm font-medium text-lime-300 mx-1 bg-transparent border border-lime-600 py-3 px-5 rounded-xl ">
              View
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Project_prop;
