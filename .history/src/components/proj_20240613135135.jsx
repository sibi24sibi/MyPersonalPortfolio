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
      <div className="container flex justify-center flex-col md:flex-row"></div>
      <Proj_props
        title="project 1"
        para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptate rem doloribus doloremque consectetur! Sed vero eum illo odit et placeat excepturi aperiam ab sit, enim voluptatum suscipit iste voluptates!
      Ullam blanditiis sint sit nesciunt, maxime possimus pariatur quis eum harum! Esse voluptas, et hic animi ipsam itaque molestias aliquam doloremque ipsa eum temporibus officia in beatae accusantium vel. Corporis?"
      />
    </section>
  );
};

export default proj;
