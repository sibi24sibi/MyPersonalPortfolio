import React, { useState } from 'react';
import Stepper from './Stepper';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const workDuration = "Jan 2020 - Present";
  const companyName = "ABC Inc.";
  const roles = "Frontend Developer";

  return (
    <div className="p-4 max-w-6xl ">
      <h1 className="text-2xl font-bold mb-4">Stepper Example</h1>
      <Stepper 
        currentStep={currentStep} 
        workDuration={workDuration} 
        companyName={companyName} 
        roles={roles} 
      />
      {/* Your other content goes here */}
    </div>
  );
};

export default Work;
