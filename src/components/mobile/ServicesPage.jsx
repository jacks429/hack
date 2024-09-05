import React, { useState } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

// Icon components for better code readability, you can replace them with actual SVGs or icon components
const InfoIcon = () => <span className="mr-2"><IoMdInformationCircleOutline /></span>;
const ArrowIcon = () => (
    <span className="bg-gray-300 p-2 rounded-full">
      <FaArrowAltCircleRight className="text-black" />
    </span>
  );const FilterIcon = () => <span><CiFilter /></span>;

const ServicesPage = () => {
  // State for the services data and the search query
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      category: 'Municipal services',
      items: ['Water', 'Gas', 'Electricity', 'Garbage collection'],
    },
    {
      category: 'Requests for corrections and improvements',
      items: ['Oprava ciest', 'Oprava chodníkov', 'Oprava osvetlenia', 'Sadové úpravy'],
    },
    {
      category: 'Health and social services',
      items: ['Making a doctor’s appointment', 'Social assistance', 'Receipt of subsidies'],
    },
  ];

  // Function to filter services based on search query
  const filteredServices = services.map((section) => {
    const filteredItems = section.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...section,
      items: filteredItems,
    };
  }).filter(section => section.items.length > 0); // Remove empty sections

  return (
    <div className="p-4">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-4">Services</h1>

      {/* Search bar and filter */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Hľadať"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
        />
        <button className="p-2 bg-gray-100">
        <FilterIcon />
        </button>

      </div>

      {/* Services sections */}
      {filteredServices.map((section, index) => (
        <div key={index} className="mb-6">
          {/* Section category */}
          <h2 className="text-lg font-semibold mb-2">{section.category}</h2>
          {/* Service items */}
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm"
              >
                <div className="flex items-center">
                  <InfoIcon className="text-lg mr-2" />
                  <span>{item}</span>
                </div>
                <ArrowIcon className="text-lg" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* If no services match the search query */}
      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500">No services found</p>
      )}
    </div>
  );
};

export default ServicesPage;
