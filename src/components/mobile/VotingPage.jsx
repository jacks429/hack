// src/components/mobile/VotingPage.jsx
import React from 'react';

const VotingPage = ( ) => {

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Hlasovanie</h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded">+ Vytvoriť podnet</button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="bg-black text-white py-2 px-4 rounded">Active</button>
        <button className="bg-gray-200 py-2 px-4 rounded">Ended</button>
      </div>

      <div className="flex flex-wrap mb-4">
        {['Život v meste', 'Ekologia', 'Bezpečnosť', 'Infrastruktúra', 'Doprava', 'Vzdielanie', 'Kultura', 'Zdravie'].map((category, index) => (
          <button key={index} className="bg-gray-100 py-2 px-4 m-1 rounded">{category}</button>
        ))}
      </div>

      <div className="flex items-center mb-4">
        <input className="border rounded-l py-2 px-4 w-full" type="text" placeholder="Hľadať" />
        <button className="bg-gray-200 py-2 px-4 rounded-r">
          {/* Add your filter icon here */}
          Filter
        </button>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Most Popular</h2>
          <button className="text-blue-500">View all</button> {/* Changed from <a> to <button> */}
        </div>
        <div className="flex space-x-4">
          {/* Replace with dynamic data */}
          <div className="w-1/2 bg-white rounded shadow overflow-hidden">
            <img src="image_url_1" alt="Problem 1" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Problem</h3>
              <p>Class / Category</p>
            </div>
          </div>
          <div className="w-1/2 bg-white rounded shadow overflow-hidden">
            <img src="image_url_2" alt="Problem 2" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">Problem</h3>
              <p>Class / Category</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Latest vote</h2>
          <button className="text-blue-500">View all</button> {/* Changed from <a> to <button> */}
        </div>
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="latest_image_url" alt="Oprava cesty" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h3 className="font-bold">Oprava cesty</h3>
            <p>Doprava / Verejná infraštruktúra</p>
            <p>Short description of the problem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
