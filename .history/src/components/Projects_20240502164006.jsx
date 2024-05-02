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

<Project_prop
            title="Portfolio Website"
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
            title="TODo list with login and sigup using laravel"
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
