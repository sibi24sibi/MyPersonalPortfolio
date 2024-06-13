import Proj_props from "./proj_props";
import { Portfolio } from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCss3,
  SiJavascript,
  SiLaravel,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const proj = () => {
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-5 min-h-screen font-['Poppins']   max-sm:p-2 max-sm:mx-5"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 text-center mt-32  font-extrabold text-5xl mb-24  max-sm:text-4xl  ">
        PROJECTS
      </h1>
      <div className="container flex flex-wrap justify-center flex-row gap-10">
        <Proj_props
          title="Personal Portfolio Website"
          para="Personal portfolio website created with react and Tailwind CSS"
          img={Portfolio}
          link=""
          github_link="https://github.com/sibi24sibi/MyPersonalPortfolio"
          react={
            <Tooltip title="React" arrow>
              <IconButton>
                <SiReact className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          tailwindcss={
            <Tooltip title="TailWind CSS" arrow>
              <IconButton>
                <SiTailwindcss className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          vite={
            <Tooltip title="Vite" arrow>
              <IconButton>
                <SiVite className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
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
