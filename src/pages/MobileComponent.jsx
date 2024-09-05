import React, { useState } from 'react';
import Header from '../components/mobile/Header';
import HomePage from '../components/mobile/HomePage';
import DocumentsPage from '../components/mobile/DocumentsPage';
import Modal from '../components/mobile/Modal';
import BottomNavigation from '../components/mobile/BottomNavigation';
import ServicesPage from '../components/mobile/ServicesPage';
import VotingPage from '../components/mobile/VotingPage';

const MobileComponent = ({ imageData }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    console.log(`Changing page to: ${page}`); // Log page changes
    setCurrentPage(page);
  };

  console.log(`Current page is: ${currentPage}`); // Log current page state

  return (
    <div className="block md:hidden min-h-screen bg-gray-100">
      <Header currentPage={currentPage} />
      {currentPage === 'home' && <HomePage runImageData={imageData.run} />}
      {currentPage === 'documents' && <DocumentsPage imageData={imageData.passport} />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'voting' && <VotingPage imageData={imageData.voting} />} 
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <BottomNavigation onPageChange={handlePageChange} />
    </div>
  );
};

export default MobileComponent;
