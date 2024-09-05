import React from 'react';
import homeIcon from '../../images/house.png';
import documentsIcon from '../../images/profile.png';
import servicesIcon from '../../images/services.png';

const BottomNavigation = ({ onPageChange }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-4 flex justify-around">
    <button
      onClick={() => onPageChange('home')}
      className="flex flex-col items-center text-red-500 p-2"
    >
      <img
        src={homeIcon}
        alt="Home"
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </button>
    <button
      onClick={() => onPageChange('documents')}
      className="flex flex-col items-center text-gray-500 p-2"
    >
      <img
        src={documentsIcon}
        alt="Documents"
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </button>
    <button
      onClick={() => onPageChange('services')}
      className="flex flex-col items-center text-gray-500 p-2"
    >
      <img
        src={servicesIcon}
        alt="Services"
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </button>
  </nav>
);

export default BottomNavigation;
