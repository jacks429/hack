// src/HomePage.jsx
import React from 'react';

const HomePage = () => (
  <div>
    {/* Latest News Section */}
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Latest news</h2>
      <div className="relative h-40 rounded-lg overflow-hidden">
        <img
          src="marathon.jpg"
          alt="Marathon"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
          Marafon 28.09.24
        </div>
      </div>
    </section>

    {/* Latest Services Section */}
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Latest services</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-2">
            <i className="icon-utilities text-red-500 text-3xl"></i>
          </div>
          <span>Utilities</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-2">
            <i className="icon-health text-red-500 text-3xl"></i>
          </div>
          <span>Health and social</span>
        </div>
      </div>
    </section>

    {/* Points Section */}
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Your points by activity to improve city</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">356</div>
          <button className="text-blue-500 text-sm">See all stores</button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <i className="icon-pizza text-red-500 text-2xl"></i>
            </div>
            <span className="text-sm mt-1">Pomadorro Pizza</span>
            <span className="text-xs text-gray-500">9 discounts for you</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <i className="icon-shop text-blue-500 text-2xl"></i>
            </div>
            <span className="text-sm mt-1">NAY</span>
            <span className="text-xs text-gray-500">8 discounts for you</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
