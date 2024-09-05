// src/components/MobileComponent.jsx
import React, { useState } from 'react';
import Header from '../components/mobile/Header';
import HomePage from '../components/mobile/HomePage';
import DocumentsPage from '../components/mobile/DocumentsPage';
import Modal from '../components/mobile/Modal';
import BottomNavigation from '../components/mobile/BottomNavigation';
import ServicesPage from '../components/mobile/ServicesPage'; // Import ServicesPage
const MobileComponent = ({ imageData }) => {
  // State to control the current page
  const [currentPage, setCurrentPage] = useState('home');

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Click handler to open the modal
  const handleDocumentsClick = () => {
    setIsModalOpen(true);
  };

  // Click handler to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Click handler to change pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="block md:hidden min-h-screen bg-gray-100">
      {/* Header */}
      <Header currentPage={currentPage} />

      {/* Page Content */}
      {currentPage === 'home' && <HomePage runImageData={imageData.run} />}
      {currentPage === 'documents' && <DocumentsPage imageData={imageData.passport} />}
      {currentPage === 'services' && <ServicesPage />}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Bottom Navigation */}
      <BottomNavigation onPageChange={handlePageChange} />
    </div>
  );
};

export default MobileComponent;
