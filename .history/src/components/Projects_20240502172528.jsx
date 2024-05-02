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
<div className="container flex justify-center">

<h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
</h1><br />

<Project_prop
            title="Personal Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""

  />
<Project_prop
            title="Binary to decimal convertor"
            para="This is reactjs project that convert binary numbers to decimal"
            img={Portfolio}
            link=""
            github_link=""

  />
  <Project_prop
            title="TODO List using Laravel"
            para="I have used laravel framework with authencation and make todo list for each user"
            img={Portfolio}
            link=""
            github_link=""

  />

</div>
</>



  );
};
export default Projects;
