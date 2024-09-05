import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { QRCodeSVG } from 'qrcode.react'; // Corrected import

const DocumentsPage = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for swipe actions
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const image = getImage(imageData);

  return (
    <div {...handlers} className="p-4">
      {currentIndex === 0 && (
        <div>
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
        </div>
      )}

      {currentIndex === 1 && (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Additional Information</h1>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            {/* Text above QR Code */}
            <p className="mb-4 text-gray-700 text-center">
              The code will still be in effect 2:43 min
            </p>
            {/* QR Code centered using QRCodeSVG */}
            <QRCodeSVG value="https://example.com" size={128} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;
