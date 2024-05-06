import React, { useState } from 'react';
import './download_styles.css'; // Import your CSS file

function CTA() {
  const resumeLink = "/Sibi-Chakraborthy-V.pdf";
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDownload = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsCompleted(true);
      setIsActive(false);
    }, 1200);
  };
  return (
    <div id="resume" className="pt-36 max-w-6xl resume relative w-full flex justify-center ">
      
      <div className="pt-14 mx-20 pb-40">
        <h2 className="text-4xl md:text-5xl max-sm:text-[35px] max-sm:leading-[60px] font-bold mb-10 text-[#00040f] dark:text-white text-center">
          Need to know about me more
        </h2>
        <div className="flex justify-center ">


        <button
        className={`btn ${isActive ? 'is-active' : ''} ${isCompleted ? 'dl-completed' : ''}`}
        id="downloadBtn"
        onClick={handleDownload}
      >
        <span className="btn__text btn__starter-text">Download</span>
      </button>
      {isCompleted && (
        <span className="btn__text btn__ender-text">Open File</span>
      )}
        
        </div>
      </div>

      
    </div>
  );
}

export default CTA;