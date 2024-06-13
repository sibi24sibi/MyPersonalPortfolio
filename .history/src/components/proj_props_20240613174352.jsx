import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const proj_props = (props) => {
  const { title, para, github_link, theme } = props;
  return (
    <section id="projects">
      <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
        <div
          className={`card-projects ${
            theme === "dark" ? "card-projects-dark" : ""
          }`}
        >
          <h3 className="title capitalize font-bold h-10 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center">
            {title}
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
          <p className="dark:text-slate-400 text-slate-800  mt-2  text-sm px-5  select-none">
            {para}
          </p>
          <div className="flex justify-center">
            <a
              className=" inline-flex items-center mt-5  rounded border inset-x-1/4 border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              href={github_link}
            >
              <button className="text-sm font-medium mx-auto">View</button>
            </a>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default proj_props;
