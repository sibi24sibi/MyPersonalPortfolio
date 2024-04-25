import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Vue,
  nodejs
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10 w-full   font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG     p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
         <div className="grid place-content-end">
      <Image img={HTML}></Image>
      <Image img={CSS}></Image>
      <Image img={Javascript}></Image>
    </div>
    <div className="grid place-content-center">
      <Image img={react}></Image>
      <Image img={TailwindCSS}></Image>
      <Image img={Python}></Image>
    </div>
    <div className="grid place-content-start">
      <Image img={Git}></Image>
      <Image img={Github}></Image>
      <Image img={nodejs}></Image>
    </div>

        </div>
      </section>
    </>
  );
};
export default Skills;
