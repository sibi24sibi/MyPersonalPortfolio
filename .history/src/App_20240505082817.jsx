import Navbar from "./components/Navbar";
import About from "./components/About";

import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


import CTA from "./components/CTA";
import MyEmailLayout from "./components/email";
import Footer from "./components/Footer";
import React from "react";
import AnimatedCursor from "react-animated-cursor"


import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  
  return (
    <>

        <div className=" flex flex-col justify-center items-center">
          <AnimatedCursor />
          <Navbar></Navbar>
          <About></About>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects>
          <CTA></CTA>
          <MyEmailLayout></MyEmailLayout>
          {/* <Footer></Footer> */}
        </div>
      )}
    </>
  );
};
export default App;
