import proj_props from "./proj_props";
import Project_prop from "./../../.history/src/components/Project_prop_20240613130859";

const proj = () => {
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-5 min-h-screen font-['Poppins']   max-sm:p-2 max-sm:mx-5"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 text-center mt-32  font-extrabold text-5xl mb-24  max-sm:text-4xl  ">
        PROJECTS
      </h1>
      <div className="container flex justify-center flex-col md:flex-row"></div>
      <Project_prop />
    </section>
  );
};

export default proj;
