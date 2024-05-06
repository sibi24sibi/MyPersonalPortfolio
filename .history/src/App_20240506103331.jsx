import Navbar from "./components/Navbar";
import About from "./components/About";

import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import HashLoader from "react-spinners/HashLoader";
import CTA from "./components/CTA";
import MyEmailLayout from "./components/email";
import Footer from "./components/Footer";
import React from "react";
// import AnimatedCursor from "react-animated-cursor"


import { useState, useEffect } from "react";

// const override = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: "5rem",
//   borderColor: "red",
// };

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
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
        <div className=" flex flex-col justify-center items-center">
          {/* <AnimatedCursor /> */}
          <Navbar></Navbar>
          <About></About>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects>
          <CTA></CTA>
          <MyEmailLayout></MyEmailLayout>
          <Footer></Footer> 
        </div>
      )}
    </>
  );
};
export default App;
