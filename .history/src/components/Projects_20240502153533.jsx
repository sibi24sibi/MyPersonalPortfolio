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











    // <section
    //   id="projects"
    //   className=" max-w-6xl mt-5  p-5 mx-20  font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    // >
    //   <div className="WRAPPER mt-1 " data-aos="fade-down">
    //     <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
    //       Projects
    //     </h1>

    //     <div
    //       className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
    //       data-aos="zoom-out-down"
    //     >
    //       <Project_prop
    //         title="Portfolio Website"
    //         para="Personal portfolio website created with react and Tailwind CSS"
    //         img={Portfolio}
    //         link=""
    //         github_link=""
    //         react={
    //           <Tooltip title="React" arrow>
    //             <IconButton>
    //               <SiReact className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         tailwindcss={
    //           <Tooltip title="TailWind CSS" arrow>
    //             <IconButton>
    //               <SiTailwindcss className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         vite={
    //           <Tooltip title="Vite" arrow>
    //             <IconButton>
    //               <SiVite className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //       />
    //       <Project_prop
    //         title="Stark Rockets"
    //         para="Stark is a fantasy and futuristic website which offers the ride of space-ship to the space"
    //         img={Rocket}
    //         link="#"
    //         github_link="#"
    //         html5={
    //           <Tooltip title="HTML5" arrow>
    //             <IconButton>
    //               <SiHtml5 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         javascript={
    //           <Tooltip title="JavaScript" arrow>
    //             <IconButton>
    //               <SiJavascript className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         tailwindcss={
    //           <Tooltip title="TailWind CSS" arrow>
    //             <IconButton>
    //               <SiTailwindcss className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //       />
    //       <Project_prop
    //         title="Thrive"
    //         para="Thrive is a website which primarily focuses on improving life-style and well-being"
    //         img={WellBeing}
    //         link="#"
    //         github_link="#"
    //         html5={
    //           <Tooltip title="HTML 5" arrow>
    //             <IconButton>
    //               <SiHtml5 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         javascript={
    //           <Tooltip title="JavaScript" arrow>
    //             <IconButton>
    //               <SiJavascript className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         css3={
    //           <Tooltip title="CSS 3" arrow>
    //             <IconButton>
    //               <SiCss3 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //       />
    //       <Project_prop
    //         title="GPT-4 Website"
    //         para="GPT 4 is a website which focuses on introduction of AI to the world "
    //         img={GPT4}
    //         link="#"
    //         github_link="#"
    //         react={
    //           <Tooltip title="React" arrow>
    //             <IconButton>
    //               <SiReact className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         javascript={
    //           <Tooltip title="JavaScript" arrow>
    //             <IconButton>
    //               <SiJavascript className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         css3={
    //           <Tooltip title="CSS 3" arrow>
    //             <IconButton>
    //               <SiCss3 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //       />
    //       <Project_prop
    //         title="Stone-Paper-Scissors Game"
    //         para="A Stone Paper Scissors game created  to remember childhood memories"
    //         img={Game}
    //         link=""
    //         github_link="#"
    //         html5={
    //           <Tooltip title="HTML 5" arrow>
    //             <IconButton>
    //               <SiHtml5 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         javascript={
    //           <Tooltip title="JavaScript" arrow>
    //             <IconButton>
    //               <SiJavascript className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //         css3={
    //           <Tooltip title="CSS 3" arrow>
    //             <IconButton>
    //               <SiCss3 className="dark:text-slate-200 text-black" />
    //             </IconButton>
    //           </Tooltip>
    //         }
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};
export default Projects;
