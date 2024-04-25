import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isTextColorBlack, setTextColorBlack] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setTextColorBlack(!isTextColorBlack);
  };

  return (
    <>
      <section className={`NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px] ${theme === 'dark' ? 'dark:bg-[#1f2937] dark:text-[#e1e1e1]' : 'bg-white text-black'}`}>
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className={`text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${isTextColorBlack ? 'text-black' : 'text-white'} max-sm:text-2xl`}
            >
              {"Portfolio"}
            </a>
          </div>
          <div className={`NAVLINKS text-[20px] translate-x-[250px] max-sm:hidden flex gap-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#about" className=" hover:text-cyan-500">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500">
              Experience
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
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
