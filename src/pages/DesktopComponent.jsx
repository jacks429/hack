import React from 'react';
import Home from '../components/desktop/Home'; // Adjust the path based on your project structure

const DesktopComponent = () => {
  return (
    <div className="hidden md:block">
      {/* This is the desktop version */}
      <Home />
    </div>
  );
};

export default DesktopComponent;
