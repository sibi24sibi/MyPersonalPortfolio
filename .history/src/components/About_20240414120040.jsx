import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-200 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
             Sibi Chakraborthy
              
            </span>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            Design is not just what it looks like and feels like. Design is how it works.
            </p>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px] "
          />
        </div>
      </section>
    </>
  );
};
export default About;
