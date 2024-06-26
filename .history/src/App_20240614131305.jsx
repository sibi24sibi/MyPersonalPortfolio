import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/cards";
import Proj from "./components/proj";
import Skills from "./components/Skills";
import HashLoader from "react-spinners/HashLoader";
import CTA from "./components/CTA";
import MyEmailLayout from "./components/email";
import Footer from "./components/Footer";

import AnimatedCursor from "react-animated-cursor";

import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-screen justify-center items-center bg-[#00040f] ">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center relative">
          <div className="animated-bg"></div>
          <AnimatedCursor />
          <Navbar></Navbar>
          <About></About>
          <Skills></Skills>
          <Education></Education>
          {isSmallScreen ? <Proj /> : <Projects />}
          <CTA></CTA>
          <MyEmailLayout></MyEmailLayout>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};
export default App;
