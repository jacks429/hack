// src/components/DocumentsPage.jsx
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DocumentsPage = ({ imageData }) => {
  if (!imageData) {
    return <p>No data found</p>;
  }

  const image = getImage(imageData);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Documents</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Slovak passport</h2>
        <div className="flex items-center mb-4">
          {image ? (
            <GatsbyImage image={image} alt="Passport" className="w-20 h-20 rounded-lg mr-4" />
          ) : (
            <p>Image not available</p>
          )}
          <div>
            <p>Date of birth: 30.09.1982</p>
            <p>Rodne cislo: 002438248</p>
          </div>
        </div>
        <div className="text-red-500 text-sm mb-2">
          * Document updated at 17:39 | 04.09.2024
        </div>
        <div className="flex justify-between items-center">
          <p>Nováková Sofiia</p>
          <button className="text-gray-500">
            <i className="icon-more"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="bg-red-500 w-2 h-2 rounded-full mx-1"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full mx-1"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default DocumentsPage;
