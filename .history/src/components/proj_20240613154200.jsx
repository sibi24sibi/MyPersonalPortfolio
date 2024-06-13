import Proj_props from "./proj_props";

const proj = () => {
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-5 min-h-screen font-['Poppins']   max-sm:p-2 max-sm:mx-5"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 text-center mt-32  font-extrabold text-5xl mb-24  max-sm:text-4xl  ">
        PROJECTS
      </h1>
      <div className="container flex wrap justify-center flex-col md:flex-row gap-10">
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
        <Proj_props
          title="project 1"
          para=" Lorem  Sed vero eum illoicia in beatae accusantium vel. Corporis?"
        />
      </div>
    </section>
  );
};

export default proj;
