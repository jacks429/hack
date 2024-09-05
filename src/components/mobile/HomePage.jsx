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

      <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Your points by activity to improve city</h2>
    <div className="flex justify-between items-center">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">356</span>
        <span className="text-red-500 text-lg ml-1">pc</span>
      </div>
      <button className="text-blue-500 text-sm">See all stores</button>
    </div>
    <p className="text-sm text-gray-500 mt-2">Pocet platnosti: 48 dni</p>
      </section>


      {/* Points Section */}
<section className="p-4">
  {/* Store 1 */}
  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="path_to_pizza_image.png" alt="Pizza" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">Pomadorro Pizza</h3>
          <p className="text-xs text-gray-500">35 discounts for you</p>
        </div>
      </div>
      <div className="text-sm text-green-600">Tue 6:00 - 22:00</div>
    </div>
  </div>

  {/* Store 2 */}
  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="path_to_store_image.png" alt="Store" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">Bistro Burger</h3>
          <p className="text-xs text-gray-500">20 discounts for you</p>
        </div>
      </div>
      <div className="text-sm text-green-600">Wed 10:00 - 23:00</div>
    </div>
  </div>

  {/* Store 3 */}
  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="path_to_store_image.png" alt="Store" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">Coffee Corner</h3>
          <p className="text-xs text-gray-500">15 discounts for you</p>
        </div>
      </div>
      <div className="text-sm text-green-600">Thu 7:00 - 18:00</div>
    </div>
  </div>

  {/* Store 4 */}
  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="path_to_store_image.png" alt="Store" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">Market Fresh</h3>
          <p className="text-xs text-gray-500">10 discounts for you</p>
        </div>
      </div>
      <div className="text-sm text-green-600">Fri 8:00 - 20:00</div>
    </div>
  </div>
</section>


  </div>
  );
};

export default HomePage;
