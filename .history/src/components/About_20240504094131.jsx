import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import profile from "../assets/profile.jpg";
import "./about-style.css";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-2 mb-10 font-medium font-['Poppins'] max-w-6xl max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex justify-between max-sm:flex-col gap-35">
        <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[40px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
             Sibi Chakraborthy.
              
            </span>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            Design is not just what it looks like and feels like. Design is how it works.
            </p>
          </div>
        <div className="div">
        <div className="team-member">

          <img src="{profile}" className="image " alt="Profile"/>
            <div className="box">
              <div className="details">
                <h3 className="text-lg text-black font-semibold">Sibi Chakraborthy</h3>
                <p className="text-slate-500 font-medium">Full Stack Developer</p>
              </div>         
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default About;
