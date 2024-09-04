// src/Header.jsx
import React from 'react';

const Header = ({ currentPage }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow-sm">
    <h1 className="text-xl font-semibold">
      {currentPage === 'home' && 'Hello, Sofia! 👋'}
      {currentPage === 'documents' && 'Documents'}
    </h1>
    <div className="flex space-x-4">
      <button className="text-gray-600">
        <i className="icon-bell"></i>
      </button>
      <button className="text-gray-600">
        <i className="icon-settings"></i>
      </button>
    </div>
  </header>
);

export default Header;
