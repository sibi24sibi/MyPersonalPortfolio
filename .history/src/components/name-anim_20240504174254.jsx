// src/components/AnimatedComponent.js

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/Name.json'; // Importing JSON animation file

const AnimatedComponent = () => {
  return (
    <div>
      <h2>Animated Component</h2>
      <Lottie animationData={animationData} />
    </div>
  );
}

export default AnimatedComponent;
