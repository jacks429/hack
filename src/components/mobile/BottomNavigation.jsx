// src/BottomNavigation.jsx
import React from 'react';

const BottomNavigation = ({ onPageChange }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-4 flex justify-around">
    <button onClick={() => onPageChange('home')} className="flex flex-col items-center text-red-500">
      <i className="icon-home"></i>
      <span className="text-xs">Home</span>
    </button>
    <button onClick={() => onPageChange('documents')} className="flex flex-col items-center text-gray-500">
      <i className="icon-documents"></i>
      <span className="text-xs">Documents</span>
    </button>
    <button onClick={() => onPageChange('news')} className="flex flex-col items-center text-gray-500">
      <i className="icon-news"></i>
      <span className="text-xs">News</span>
    </button>
    <button onClick={() => onPageChange('services')} className="flex flex-col items-center text-gray-500">
      <i className="icon-services"></i>
      <span className="text-xs">Services</span>
    </button>
  </nav>
);

export default BottomNavigation;
