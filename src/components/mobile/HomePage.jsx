import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useSwipeable } from 'react-swipeable';
import utilitiesImage from '../../images/image_utilities.png'; // Adjust the path based on your structure
import healthImage from '../../images/health.png'; // Import the health.png image
import educationImage from '../../images/education.png'; // Import the education.png image
import pizzaImage from '../../images/pizza.jpg'; // Import the pizza image
import nayImage from '../../images/nay.png'; // Import the NAY image

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
        <div {...handlers} className="flex space-x-4 overflow-x-auto hide-scrollbar touch-pan-x">
          {/* Service 1 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md min-w-[150px]">
            <div className="mb-2">
              <img src={utilitiesImage} alt="Utilities" className="w-12 h-12" />
            </div>
            <span className="text-center">Utilities</span>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md min-w-[150px]">
            <div className="mb-2">
              <img src={healthImage} alt="Health and social" className="w-12 h-12" />
            </div>
            <span className="text-center">Health and social</span>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md min-w-[150px]">
            <div className="mb-2">
              <img src={educationImage} alt="Education" className="w-12 h-12" />
            </div>
            <span className="text-center">Education</span>
          </div>
        </div>
      </section>

      {/* Points Section */}
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

      {/* Stores Section */}
      <section className="p-4">
        <h2 className="text-lg font-semibold mb-2">Your points by activity to improve city</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          {/* Pomadorro Pizza Entry */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={pizzaImage} alt="Pizza" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <span className="block font-semibold">Pomadorro Pizza</span>
                <span className="block text-xs text-gray-500">35 discounts for you</span>
              </div>
            </div>
            <span className="text-xs text-green-500">Tue 6:00 - 22:00</span>
          </div>
          {/* NAY Entry */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={nayImage} alt="NAY" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <span className="block font-semibold">NAY</span>
                <span className="block text-xs text-gray-500">8 discounts for you</span>
              </div>
            </div>
            <span className="text-xs text-green-500">Tue 8:00 - 21:00</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
