import React, { useState, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { QRCodeSVG } from 'qrcode.react';
import artyImage from '../../images/arty.jpg'; // Import the static image
import redBallDots from '../../images/redball-3dot.png';
import Modal from './Modal'; // Import the Modal component

const DocumentsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [preferences, setPreferences] = useState({
    sports: false,
    culture: false,
    hackathon: false,
    bikes: false,
  }); // State to control checkbox preferences

  // Handlers for swipe actions
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Use useCallback to memoize handlers to avoid re-creation on every render
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handlePreferenceChange = useCallback((event) => {
    const { name, checked } = event.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  }, []);

  return (
    <div {...handlers} className="p-4">
      {currentIndex === 0 && (
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">My Proflike</h2>
            <div className="flex items-center mb-4">
              <img src={artyImage} alt="Passport" className="w-20 h-20 rounded-lg mr-4" />
              <div>
                <p>Date of birth: 30.09.1982</p>
                <p>Rodne cislo: 002438248</p>
              </div>
            </div>
            <div className="text-red-500 text-sm mb-2">
              * Document updated at 17:39 | 04.09.2024
            </div>
            <div className="flex justify-between items-center">
              <p>Michaela Vavrová</p>
              <img src={redBallDots} alt="More options" className="w-6 h-6 cursor-pointer" onClick={handleOpenModal} />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Personalize your app:</h3>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="sports"
                  checked={preferences.sports}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Sports
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="culture"
                  checked={preferences.culture}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Culture
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="hackathon"
                  checked={preferences.hackathon}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Hackathon
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="bikes"
                  checked={preferences.bikes}
                  onChange={handlePreferenceChange}
                  className="mr-2"
                />
                Bikes
              </label>
            </div>
          </div>
        </div>
      )}

      {currentIndex === 1 && (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Additional Information</h1>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <p className="mb-4 text-gray-700 text-center">
              The code will still be in effect 2:43 min
            </p>
            <QRCodeSVG value="https://example.com" size={128} />
          </div>
        </div>
      )}

      {/* Modal component */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />} {/* Conditional rendering */}
    </div>
  );
};

export default DocumentsPage;
