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
            <Tooltip title="React" arrow>
              <IconButton>
                <SiCss3 className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
        />

        <Proj_props
          title="TODO List using Laravel"
          para="I have used laravel framework with authencation and make todo list for each user"
          img={Portfolio}
          link=""
          github_link="https://github.com/sibi24sibi/Laravel-login-reg-page-with-todo-list"
          laravel={
            <Tooltip title="Laravel" arrow>
              <IconButton>
                <SiLaravel className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          bootstrap={
            <Tooltip title="Bootstrap" arrow>
              <IconButton>
                <SiBootstrap className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
        />
        <Proj_props
          title="Blood Bank MAnagement System"
          para="The project is created using php and mysql used to store blood donor and receiver information"
          img={Portfolio}
          link=""
          github_link="https://github.com/sibi24sibi/blood-bank-management-php"
          php={
            <Tooltip title="PHP" arrow>
              <IconButton>
                <SiPhp className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          mysql={
            <Tooltip title="Mysql" arrow>
              <IconButton>
                <SiMysql className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
        />
        <Proj_props
          title="Chatbot with Whatsapp interface"
          para="This project used to feed reply and response to chatbot to provides information"
          img={Portfolio}
          link=""
          github_link="https://github.com/sibi24sibi/php-mysql-manally-chatbot"
          php={
            <Tooltip title="PHP" arrow>
              <IconButton>
                <SiPhp className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          mysql={
            <Tooltip title="Mysql" arrow>
              <IconButton>
                <SiMysql className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
          javascript={
            <Tooltip title="JavaScript" arrow>
              <IconButton>
                <SiJavascript className=" dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
          }
        />
      </div>
    </section>
  );
};

export default proj;
