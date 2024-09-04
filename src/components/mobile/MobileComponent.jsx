// src/MobileComponent.jsx
import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import DocumentsPage from './DocumentsPage';
import Modal from './Modal';
import BottomNavigation from './BottomNavigation';

const MobileComponent = () => {
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
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'documents' && <DocumentsPage />}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Bottom Navigation */}
      <BottomNavigation onPageChange={handlePageChange} />
    </div>
  );
};

export default MobileComponent;
