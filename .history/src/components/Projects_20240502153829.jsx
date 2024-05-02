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


    <section
      id="projects"
      className=" max-w-6xl mt-5  p-5 mx-20  font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-1 " data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >


    <div className="container">
  <div className="card">
    <h3 className="title">Proj 1</h3>
    <div className="bar">
      <div className="emptybar"></div>
    </div>
  </div>
  <div className="card">
    <h3 className="title">Proj 2</h3>
    <div className="bar">
      <div className="emptybar"></div>
    </div>
  </div>
  <div className="card">
    <h3 className="title">Proj 3</h3>
    <div className="bar">
      <div className="emptybar"></div>
    </div>
   
  </div>
  <div className="card">
    <h3 className="title">Proj 4</h3>
    <div className="bar">
      <div className="emptybar"></div>
    </div>
    
  </div>
</div>

</div>
</div>
</section>









  );
};
export default Projects;
