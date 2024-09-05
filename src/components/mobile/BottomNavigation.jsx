import React from 'react';
import homeIcon from '../../images/home-icon.png';
import voteIcon from '../../images/vote-icon.png';
import documentsIcon from '../../images/documents-icon.png';
import settingsIcon from '../../images/settings-icon.png';
import servicesIcon from '../../images/services-icon.png';

const BottomNavigation = ({ onPageChange }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-4 flex justify-around">
    <button onClick={() => onPageChange('home')} className="flex flex-col items-center text-red-500">
      <img src={homeIcon} alt="Home" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
    </button>
    <button onClick={() => onPageChange('documents')} className="flex flex-col items-center text-gray-500">
      <img src={documentsIcon} alt="Documents" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
    </button>
    <button onClick={() => onPageChange('vote')} className="flex flex-col items-center text-gray-500">
      <img src={voteIcon} alt="Vote" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
    </button>
    <button onClick={() => onPageChange('news')} className="flex flex-col items-center text-gray-500">
      <img src={settingsIcon} alt="News" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
    </button>
    <button onClick={() => onPageChange('services')} className="flex flex-col items-center text-gray-500">
      <img src={servicesIcon} alt="Services" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
    </button>
  </nav>
);

export default BottomNavigation;
