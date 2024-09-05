import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useSwipeable } from 'react-swipeable';

const HomePage = ({ runImageData }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left"),
    onSwipedRight: () => console.log("Swiped right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div>
      {/* Latest News Section */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-2">Latest news</h2>
        <div className="relative h-40 rounded-lg overflow-hidden">
          {runImageData ? (
            <GatsbyImage
              image={runImageData}
              alt="Marathon"
              className="w-full h-full object-cover"
            />
          ) : (
            <p>Image not available</p>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
            Marathon 28.09.24
          </div>
        </div>
      </section>

      {/* Latest Services Section */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-2">Latest services</h2>
        {/* Apply swipe handlers to this container */}
        <div {...handlers} className="flex space-x-4 overflow-x-auto hide-scrollbar touch-pan-x">
          {/* Service 1 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm min-w-[150px]">
            <div className="mb-2">
              <i className="icon-utilities text-red-500 text-3xl"></i>
            </div>
            <span>Utilities</span>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm min-w-[150px]">
            <div className="mb-2">
              <i className="icon-health text-red-500 text-3xl"></i>
            </div>
            <span>Health and social</span>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm min-w-[150px]">
            <div className="mb-2">
              <i className="icon-education text-red-500 text-3xl"></i>
            </div>
            <span>Education</span>
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
};

export default HomePage;
