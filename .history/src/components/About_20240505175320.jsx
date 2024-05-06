import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import profile from "../assets/Profile.jpeg";
import "./about-style.css";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-2 mb-10 h-max font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5 md:max-w-6xl "
      >
        <div className="WRAPPER mt-12 flex justify-between max-sm:flex-col   gap-12">
        <div className="INTRO pl-32 pr-12 text-[70px]    leading-[80px] font-semibold max-sm:text-[40px] max-sm:leading-[70px] max-sm:font-semibold">
            <h1 className="text-[#00040f] dark:text-white ">

              Hi there

            </h1>

            <span className="bg-clip-text py-20 text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200  md:text-base text-xs whitespace-nowrap ">
              
            
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I am Sibi Chakraborthy.V ',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'I am Full stack Developer',
                  1000,
                  'I like to Learn new Stuffs',
                  1000,
                  'Thanks for Visting my Site',
                  1000,
                  'Just Mail Me for Any Favour',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block'  }}
                repeat={Infinity}
              />
              
            </span>

            <p className="ABOUT h-fit text-xl max-sm:text-[15px] bg-clip-text text-transparent text-left bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200  mt-5   max-sm:text-[20px] min-w-[400px]">
            Design is not just what it looks like and feels like. Design is how it works. 
            <p className="text-right mt-5">
            - Steve Jobs
            </p>
            </p>
            
          </div>
        <div className="div flex justify-center mt-3 md:mt-0 min-w-fit align-items sm:ml-44 ml-0 ">
        <div className="team-member ">

          <img src={profile} className="image aspect-square " alt="Profile"/>
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
