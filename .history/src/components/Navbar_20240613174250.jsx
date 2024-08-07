import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import ProjProps from "./proj_props";

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
    <section className="NAVBAR sticky top-0 backdrop-blur-[5px] z-10 pt-5 translate-x-[20px] min-w-full mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-1 max-sm:max-h-[48px]">
      <div className="flex justify-between items-center capitalize md:ml-9 sm:ml-2">
        <div className="LOGO">
          <p className="text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl whitespace-nowrap">
            PORTFOLIO
          </p>
        </div>
        <div className="NAVLINKS min-w-full pr-40 text-[20px] translate-x-[-60px] max-sm:hidden flex justify-end gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
          <a href="#about" className="hover:text-cyan-500">
            Home
          </a>
          {/* <a href="#experience" className="hover:text-cyan-500">
            Experience
          </a> */}
          <a href="#resume" className="hover:text-cyan-500 ">
            Resume
          </a>
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
        <button onClick={() => setNav(!nav)}>
          <CgMenuRightAlt className="hidden max-sm:block mr-5 absolute top-2 right-10 md:transform-none text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {nav && <Menu />}
    </section>
  );
};

export default Navbar;
