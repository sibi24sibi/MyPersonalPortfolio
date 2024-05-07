import React from 'react';

const Stepper = ({ currentStep, workDuration, companyName, roles }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}>
          <span className="text-white">{currentStep >= 1 ? '1' : ''}</span>
        </div>
        <div className="h-px bg-gray-500 flex-1 ml-2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center md:px-4">
        <div className="md:text-center md:mx-4">
          <p className="font-bold">{workDuration}</p>
          <p className="text-sm text-gray-600">Work Duration</p>
        </div>
        <div className="md:text-center md:mx-4 mt-2 md:mt-0">
          <p className="font-bold">{companyName}</p>
          <p className="text-sm text-gray-600">Company Name</p>
        </div>
        <div className="md:text-center md:mx-4 mt-2 md:mt-0">
          <p className="font-bold">{roles}</p>
          <p className="text-sm text-gray-600">Roles</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}>
          <span className="text-white">{currentStep >= 2 ? '2' : ''}</span>
        </div>
        <div className="h-px bg-gray-500 flex-1 ml-2"></div>
      </div>

      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>
          <span className="text-white">{currentStep >= 3 ? '3' : ''}</span>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
