import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

<>

<section
      id="projects"
      className="EXPERIENCE p-5 mx-5 min-h-screen font-['Poppins']   max-sm:p-2 max-sm:mx-5"
    >
<h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-24  max-sm:text-4xl  ">
          Projects
</h1>
<div className="container flex justify-center">


<Project_prop
            title="Personal Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""
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
<Project_prop
            title="Binary to decimal convertor"
            para="This is reactjs project that convert binary numbers to decimal"
            img={Portfolio}
            link=""
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="Css" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

  />


<Project_prop
            title="TODO List using Laravel"
            para="I have used laravel framework with authencation and make todo list for each user"
            img={Portfolio}
            link=""
            github_link=""

  />
  <Project_prop
            title="Blood Bank MAnagement System"
            para="The project is created using php and mysql used to store blood donor and receiver information"
            img={Portfolio}
            link=""
            github_link=""

  />
  <Project_prop
            title="Chatbot with Whatsapp interface"
            para="This project used to feed reply and response to chatbot to provides information"
            img={Portfolio}
            link=""
            github_link=""
  />
  <div className="card bg-slate-300 dark:bg-zinc-900 rounded-lg shadow-lg  ">
        <h3 
        className="title capitalize font-bold h-20 text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg m-5 text-center justify-center"
        >
          Visit my Github Profile for more projects 
        </h3>
            
  </div>

  </div>
</section>

</>



  );
};
export default Projects;
