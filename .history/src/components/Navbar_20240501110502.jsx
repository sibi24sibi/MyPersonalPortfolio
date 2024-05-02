import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR sticky  backdrop-blur-[5px] z-10    translate-x-[20px] min-w-full mt-5 font-['Poppins']  max-sm:p-2 max-sm:mx-1 max-sm:max-h-[48px] ">
        <div className="flex  justify-between capitalize">
          <div className="LOGO ">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"Portfolio"}
            </a>
          </div>
          <div className="NAVLINKS min-w-full  text-[20px] translate-x-[-160px]  max-sm:hidden flex justify-end gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
            <a href="#about" className=" hover:text-cyan-500">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500">
              Experience
            </a>
            {/* <a href="#education" className="hover:text-cyan-500 ">
              Education
            </a> */}
            <a href="#projects" className="hover:text-cyan-500 ">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500 ">
              Contact
            </a>
            
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          
            </div>
            </div>
          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block m-5 translate-y-[-50px]  translate-x-[330px] md:transform-none text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
          
        
        {nav && <Menu />}
        
      </section>


      
    </>
  );
};
export default Navbar;