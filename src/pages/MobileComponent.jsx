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
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage={currentPage} />
      {currentPage === 'home' && imageData?.run && <HomePage runImageData={imageData.run} />}
      {currentPage === 'documents' && imageData?.passport && <DocumentsPage imageData={imageData.passport} />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'voting' && <VotingPage imageData={imageData.voting} />}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <BottomNavigation onPageChange={handlePageChange} />
    </div>
  );
};

export default MobileComponent;
