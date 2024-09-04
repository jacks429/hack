// src/DocumentsPage.jsx
import React from 'react';

const DocumentsPage = () => (
  <div className="p-4">
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Slovak passport</h2>
      <div className="flex items-center mb-4">
        <img src="passport-photo.jpg" alt="Passport" className="w-20 h-20 rounded-lg mr-4" />
        <div>
          <p>Date of birth: 30.09.1982</p>
          <p>Rodne cislo: 002438248</p>
        </div>
      </div>
      <div className="text-red-500 text-sm mb-2">
        * Document updated at 17:39 | 04.09.2024
      </div>
      <div className="flex justify-between items-center">
        <p>Nováková Sofia</p>
        <button className="text-gray-500">
          <i className="icon-more"></i>
        </button>
      </div>
    </div>
  </div>
);

export default DocumentsPage;
