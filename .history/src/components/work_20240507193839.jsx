import React from 'react';

const Stepper = ({ workDuration, companyName, roles }) => {
  return (
    <div className="flex items-center justify-between">
      {workDuration && (
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500">
            <span className="text-white">1</span>
          </div>
          <p className="text-xs text-gray-600 ml-1">{workDuration}</p>
        </div>
      )}

      {companyName && (
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500">
            <span className="text-white">2</span>
          </div>
          <p className="text-xs text-gray-600 ml-1">{companyName}</p>
        </div>
      )}

      {roles && (
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500">
            <span className="text-white">3</span>
          </div>
          <p className="text-xs text-gray-600 ml-1">{roles}</p>
        </div>
      )}
    </div>
  );
};

export default Stepper;
