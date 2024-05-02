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










  );
};
export default Projects;
